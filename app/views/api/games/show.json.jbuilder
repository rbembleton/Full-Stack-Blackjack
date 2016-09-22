json.(@game, :id, :created_at, :updated_at)

json.dealer do

end

json.players @game.players
