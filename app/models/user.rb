# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  game_id         :integer
#  order_in_game   :integer
#

class User < ActiveRecord::Base

  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :username, length: { maximum: 16, minimum: 4 }
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token

  ## ASSOCIATIONS

  belongs_to :game
  has_one :hand, as: :player

  ## METHODS

  def join(game_id)
    self.leave() if self.game_id != nil
    g = Game.find(game_id)
    ord = g.next_order_num
    self.update!(game_id: game_id, order_in_game: ord)
    g.update!(next_order_num: ord + 1)
  end

  def leave
    self.hand.destroy if self.hand
    return unless self.game_id
    
    g = Game.find(self.game_id)
    self.update!(game_id: nil, order_in_game: nil)
    g.destroy! if g.users.count == 0
  end

  def hit_me
    self.game.deck.deal(1).update!(
      location_id: self.hand.id,
      location_type: 'Hand',
      order: self.hand.cards.count,
      hidden: (self.hand.cards.count == 0)
    )
  end

  ## AUTH

  def self.generate_session_token
    token = SecureRandom.urlsafe_base64(16)
      while User.exists?(session_token: token)
        token = SecureRandom.urlsafe_base64(16)
      end
    token
  end

  def self.find_by_credentials(credentials)
    user = User.find_by(username: credentials[:username])
    return user if user && user.valid_password?(credentials[:password])
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
