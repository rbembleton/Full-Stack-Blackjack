json.hand do
  json.cards hand.cards do |card|
    json.(card, :id, :name, :num)
  end
  json.is_busted hand.busted?
  json.(hand, :best_value, :lowest_value)
end
