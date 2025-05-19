-- Common Business Analytics Queries

-- 1. Total Revenue (Last 30 Days)
SELECT 
    SUM(total_amount) as total_revenue
FROM orders
WHERE order_date >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY)
AND status = 'Completed';

-- 2. Customer Count and Growth
SELECT 
    COUNT(*) as total_customers,
    COUNT(CASE WHEN signup_date >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY) THEN 1 END) as new_customers_30d
FROM customers;

-- 3. Active Customers (Last 30 Days)
SELECT 
    COUNT(DISTINCT customer_id) as active_customers
FROM orders
WHERE order_date >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY);

-- 4. Average Order Value (AOV)
SELECT 
    AVG(total_amount) as average_order_value
FROM orders
WHERE status = 'Completed';

-- 5. Product Performance
SELECT 
    p.product_name,
    COUNT(oi.order_item_id) as units_sold,
    SUM(oi.quantity * oi.unit_price) as revenue
FROM products p
LEFT JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_id, p.product_name
ORDER BY revenue DESC;

-- 6. Customer Activity Analysis
SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    COUNT(o.order_id) as total_orders,
    SUM(o.total_amount) as total_spent,
    MAX(o.order_date) as last_order_date
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY total_spent DESC;

-- 7. Monthly Revenue Trend
SELECT 
    DATE_FORMAT(order_date, '%Y-%m') as month,
    SUM(total_amount) as monthly_revenue
FROM orders
WHERE status = 'Completed'
GROUP BY DATE_FORMAT(order_date, '%Y-%m')
ORDER BY month;

-- 8. Customer Retention Rate
SELECT 
    COUNT(DISTINCT CASE WHEN last_activity_date >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY) THEN customer_id END) * 100.0 / 
    COUNT(DISTINCT customer_id) as retention_rate
FROM customers;

-- 9. Top Customers by Revenue
SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    SUM(o.total_amount) as total_revenue
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.status = 'Completed'
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY total_revenue DESC
LIMIT 10;

-- 10. Product Category Performance
SELECT 
    p.category,
    COUNT(DISTINCT oi.order_id) as order_count,
    SUM(oi.quantity * oi.unit_price) as category_revenue
FROM products p
JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.category
ORDER BY category_revenue DESC;
