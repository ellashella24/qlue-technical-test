SELECT name FROM (
	SELECT p.name, COUNT(DISTINCT(t.item_id)) AS total_variety FROM persons p
	JOIN transactions t ON p.id = t.person_id JOIN items i ON t.item_id = i.id
	GROUP BY p.name ORDER BY total_variety DESC
) AS temp ;