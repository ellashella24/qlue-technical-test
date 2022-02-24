SELECT p.name, i.name, t.total, t.date FROM persons p
JOIN transactions t ON p.id = t.person_id JOIN items i ON t.item_id = i.id
WHERE date BETWEEN '2020-01-01 00:00:00' AND '2020-06-25 23:59:59';