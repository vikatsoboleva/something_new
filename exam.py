russian_language = int(input('Введите количество баллов по русскому языку:'))
math = int(input('Введите количество баллов по математике:'))
informatics = int(input('Ввекдите колличество баллов по информатике:'))
if russian_language + math + informatics >= 270:
  print('Поздравляю, ты поступил на бюджет!')
else:
  print('К сожалению, ты не прошел на бюджет.')