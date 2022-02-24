SELECT p.name, SUM(t.total * i.price) AS total_price FROM persons p
JOIN transactions t ON p.id = t.person_id JOIN items i ON t.item_id = i.id
GROUP BY p.name;