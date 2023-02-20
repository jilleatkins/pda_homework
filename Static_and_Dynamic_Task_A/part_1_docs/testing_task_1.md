### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.

Note that we are only looking for errors here.

**Not** any issues with, i.e.: 
Thinking that methods should be renamed or should be class level, or using string interpolation etc. 

These aren't errors but rather standards that vary from developer to developer. 

Only comment on errors that would stop the tests running.

```python

class CardGame:


  def check_for_ace(self, card):
    # Must have == instead of =
    if card.value = 1:
      return True
      # Must include colon after 'else'
    else
      return False
   
# 'Dif' to 'def', requires comma after 'card1'
  dif highest_card(self, card1 card2):
# indent everything once with a tab
  if card1.value > card2.value:
    # Must return 'card1' instead of 'card'
    return card
  else:
    return card2
  

# Missing indentation of line 38
def cards_total(self, cards):
  # 'Total' must be defined as a variable, i.e. 'total = 0'
  total
  for card in cards:
    total += card.value
    # Return statement requires a formatted string, i.e. 'f"You have a total of {total}"'
    # Return statement must not be in 'for' loop
    return "You have a total of" + total
