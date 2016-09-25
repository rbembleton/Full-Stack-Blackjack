json.(@game, :id, :created_at, :updated_at)

json.current_player do
  json.partial! 'api/games/user', user: @game.current_player
end

json.dealer do
  json.partial! 'api/games/hand', hand: @game.dealer.hand
end

json.users @game.users do |user|
  json.partial! 'api/users/user', user: user
  json.partial! 'api/games/hand', hand: user.hand
end

json.deck do
  json.size @game.deck.cards.count
end
