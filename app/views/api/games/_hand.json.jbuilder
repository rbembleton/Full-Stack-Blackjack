json.hand do
  json.cards hand.cards do |card|
    json.(card, :id, :show, :num)
  end

  json.(hand, :best_value, :lowest_value)
end
