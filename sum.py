# Васин друг переехал в новую квартиру, и ему нужно купить три стула в разные комнаты. Цены на стулья  разные, а в некоторых магазинах есть скидки. Друг хочет заказать у Васи калькулятор скидки, чтобы проще ориентироваться в ценах.

# Напишите программу, которая запрашивает три стоимости товара и вычисляет сумму чека. Если сумма чека превышает 10 000 руб., нужно вычесть из этой суммы скидку 10% (умножить на 10, разделить на 100). Итоговая сумма должна выводиться на экран.
first_chair = int(input('Введите стоимость первого стула:'))
second_chair = int(input('Введите стоимость втрого стула:'))
third_chair = int(input('Введите стоимость третьего стула:'))
sum = first_chair + second_chair + third_chair
if sum > 10000:
  sum = sum - (sum * 10 / 100)
print('Итоговая сумма:', sum)