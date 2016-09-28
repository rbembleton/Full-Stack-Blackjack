json.hand do
  json.cards hand.cards do |card|
    json.(card, :id, :hidden)
    if !card.hidden || (hand.player_type == 'User' && hand.player_id == current_user.id)
      json.(card, :name, :num)
      json.hidden false
    end
  end
  json.is_busted hand.busted?
  json.(hand, :best_value, :lowest_value)
end
