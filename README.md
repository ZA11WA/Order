Zad1. 
net_total - DECIMAL(10,2) lub NUMERIC(10,2)
tax - DECIMAL(10,2) lub NUMERIC(10,2)
total - DECIMAL(10,2) lub NUMERIC(10,2)
net_price - DECIMAL(10,2) lub NUMERIC(10,2)
quantity - INTEGER

DECIMAL(10,2) lub NUMERIC(10,2) aby zapewnić precyzję obliczeń kwot bez błędów zaokrągleń.
Gdybym użył bazy danych, pobierałbym wartości w formacie JSON,
a następnie mapował je w aplikacji, obliczając net_total, tax i total na podstawie danych o cenie netto i ilości.
Dzięki temu cała logika obliczeń mogłaby działać po stronie backendu, a frontend otrzymywałby już gotowe, przetworzone wartości.

Zad2. Obliczania wartości zamówienia na podstawie podanych pozycji oraz stawki podatkowej.  

 Testy  
Zaimplementowano testy jednostkowe w Jest, które sprawdzają poprawność obliczeń:  
- Weryfikacja poprawności wartości netto i brutto dla pozycji  
- Sprawdzenie, czy całkowita suma zamówienia jest prawidłowa  
- Testy dla losowo generowanych danych  

Aby uruchomić testy:  
npn test
Aby uruchomic zad1.ts
ts-nide zad1.ts
