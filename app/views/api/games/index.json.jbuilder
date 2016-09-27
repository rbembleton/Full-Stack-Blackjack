json.array! @games do |game|
  json.(game, :id, :status)
  json.users game.users.count
end
