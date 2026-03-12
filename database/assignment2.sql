-- Query 1: Inserir Tony Stark
INSERT INTO public.account (account_firstname, account_lastname, account_email, account_password)
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');

-- Query 2: Mudar Tony Stark para Admin (Supondo que o ID dele seja 1)
UPDATE public.account 
SET account_type = 'Admin' 
WHERE account_id = 1;

-- Query 3: Deletar Tony Stark (Supondo que o ID dele seja 1)
DELETE FROM public.account 
WHERE account_id = 1;

-- Query 4: Modificar a descrição do GM Hummer usando REPLACE
UPDATE public.inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_model = 'Hummer';

-- Query 5: Inner Join para itens da categoria "Sport"
SELECT inv_make, inv_model, classification_name
FROM public.inventory i
INNER JOIN public.classification c 
ON i.classification_id = c.classification_id
WHERE c.classification_name = 'Sport';

-- Query 6: Atualizar caminhos das imagens
UPDATE public.inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');