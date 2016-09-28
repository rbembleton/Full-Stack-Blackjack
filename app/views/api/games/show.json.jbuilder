json.(@game, :id, :created_at, :updated_at, :status)

json.winner do
  if @game.winner
    json.type @game.winner.class.to_s
    if @game.winner.class.to_s == 'User'
      json.partial! 'api/users/user', user: @game.winner
    else
      json.id @game.winner.id
      json.username 'dealer'
    end
  else
    json.nil!
  end
end

json.current_player do
  if @game.current_player
    json.type @game.turn_type
    if @game.turn_type == 'User'
      json.partial! 'api/users/user', user: @game.current_player
    else
      json.id @game.turn_id
      json.username 'dealer'
    end
  else
    json.nil!
  end
end

json.dealer do
  json.id @game.dealer.id
  if @game.dealer.hand
    json.partial! 'api/games/hand', hand: @game.dealer.hand, current_user: current_user
  else
    json.hand nil
  end
end

json.users @game.users do |user|
  json.partial! 'api/users/user', user: user
  if user.hand
    json.partial! 'api/games/hand', hand: user.hand, current_user: current_user
  else
    json.hand nil
  end
end

json.deck do
  json.size @game.deck.cards.count
end
