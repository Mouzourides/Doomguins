CREATE SCHEMA IF NOT EXISTS doomguins;
CREATE TABLE IF NOT EXISTS doomguins.penguins(
 id bigint not null primary key,
 name text not null,
 info text
);

INSERT INTO doomguins.penguins(id, name, info)
VALUES
(1, 'Adelie', 'Likes to dance'),
(2, 'African', 'Has a keen obsession with shoelaces?'),
(3, 'Chinstrap', 'Hasnt learn how to shave yet...'),
(4, 'Emperor', 'And you though the king penguin was bad!'),
(5, 'Erect Crested', 'Not what it sounds like'),
(6, 'Fiordland', 'Currently fighting a legal battle with Ford for reasons unknown'),
(7, 'Galapagos', 'Elopes with turtles (sometimes)'),
(8, 'Gentoo', 'Im still, im still Gentoo from the block'),
(9, 'Humboldt', 'Hmmmm, a bolt?'),
(10, 'King', 'Something, something massive ego...'),
(11, 'Little', 'Just dont call him cute'),
(12, 'Macaroni', 'Cant believe its not pasta!'),
(13, 'Magellanic', 'Shares its name with the Magellanic cloud, not sure why though...'),
(14, 'Northern Rockhopper', 'Like the Rockhopper penguin but more northern-y'),
(15, 'Rockhopper', 'Likes to hop on rocks (yes really)'),
(16, 'Royal', 'Aspires to be a King penguin'),
(17, 'Southern Rockhopper', 'Jumps on rocks, like its Rockhopper cousin, but ALWAYS jumps south for some reason'),
(18, 'Snares', 'No drum kit is complete without him');

