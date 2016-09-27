json.(@game, :id, :created_at, :updated_at, :winner, :status)

json.current_player do
  if @game.current_player
    json.partial! 'api/users/user', user: @game.current_player
  else
    json.nil!
  end
end

json.dealer do
  json.id @game.dealer.id
  if @game.dealer.hand
    json.partial! 'api/games/hand', hand: @game.dealer.hand
  else
    json.hand nil
  end
end

json.users @game.users do |user|
  json.partial! 'api/users/user', user: user
  if user.hand
    json.partial! 'api/games/hand', hand: user.hand
  else
    json.hand nil
  end
end

json.deck do
  json.size @game.deck.cards.count
end
