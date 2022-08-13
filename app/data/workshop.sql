-- workshop creation table script

BEGIN;

DROP TABLE IF EXISTS "theme", "containtheme", "workspace", "containressources", "containmedia", "users", "ressources", "media" CASCADE;

-- ---------------------------------------------------------------
-- Table "theme"
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS "theme" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "titletheme" TEXT,
  "day" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "image" TEXT NULL,
  "theme_presentation" TEXT
  );

-- Données de test

  INSERT INTO theme (titletheme, image, theme_presentation) VALUES ('angels', '', 'texte de présentation');

-- -------------------------------------------------------------------
-- Table "workspace"
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS "workspace" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "titleworkspace" TEXT NOT NULL,
  "day" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "owner" TEXT NOT NULL,
  "workspace_presentation" TEXT
);

-- Données de test

INSERT INTO workspace (titleworkspace, owner, workspace_presentation)
VALUES ('mes projets en cours', 'ysm', 'texte de présentation');

-- ---------------------------------------------------------------------------
-- Table "user"
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS "users" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "username" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "lastname" TEXT NOT NULL,
  "firstname" TEXT NOT NULL,
  "adresse" TEXT,
  "town" TEXT,
  "zipcode" TEXT, 
  "email" TEXT NOT NULL,
  "phone" INT,
  "creation_date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "social_network" TEXT,
  "titleworkspace" INT REFERENCES "workspace" ("id"),
  "titlemedia" INT REFERENCES "workspace" ("id"),
  "titletheme" INT REFERENCES "workspace" ("id")
);

-- Données de test

INSERT INTO users (username, password, lastname, firstname, adresse, town, zipcode, email, phone, social_network)
VALUES ('ysm', 'password', 'saint-marc', 'yann', 'nulle part', 'nowhere', '00000', 'yann.nullepart@nowhere.com', '0000000000','facebook');

-- ---------------------------------------------------------------------------
-- Table "ressources"
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS "ressources" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "titleressources" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "link" TEXT
);

-- Données de test

INSERT INTO ressources (titleressources, type, link)
VALUES ('ma ressource', 'photography', 'www.photo.com/ma_photo');

-- ---------------------------------------------------------------------------
-- Table "media"
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS "media" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "titlemedia" TEXT,
  "author" TEXT,
  "day" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "type" TEXT,
  "material" TEXT,
  "size_height" INT,
  "size_width" INT,
  "weight" INT,
  "media_presentation" TEXT,
  "image_media" TEXT NULL
);

-- Données de test

INSERT INTO media (titlemedia, author, type, material, size_height, size_width, weight, media_presentation, image_media)
VALUES ('un ange', 'ysm', 'photography', 'tirage numérique sur papier', '30', '30', '10', 'texte de présentation', 'www.photo.com/ma_photo/ange');

-- ----------------------------------------------------------------------------
-- tables d'association:
-- ----------------------------------------------------------------------------
-- ManyToMany_Theme2Workspace
-- ----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS "ManyToMany_Theme2Workspace" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "workspace_id" INT NOT NULL REFERENCES "workspace" ("id") ON DELETE CASCADE,
  "theme_id" INT NOT NULL REFERENCES "theme" ("id") ON DELETE CASCADE
  );

-- ----------------------------------------------------------------------------
-- ManyToMany_Media2Theme
-- ----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS "ManyToMany_Media2Theme" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "theme_id" INT NOT NULL REFERENCES "theme" ("id") ON DELETE CASCADE,
  "media_id" INT NOT NULL REFERENCES "media" ("id") ON DELETE CASCADE
  );

-- ----------------------------------------------------------------------------
  -- ManyToMany_Ressources2Media
-- ----------------------------------------------------------------------------

  CREATE TABLE IF NOT EXISTS "ManyToMany_Ressources2Media" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "theme_id" INT NOT NULL REFERENCES "theme" ("id") ON DELETE CASCADE,
  "media_id" INT NOT NULL REFERENCES "media" ("id") ON DELETE CASCADE,
  "ressources_id" INT NOT NULL REFERENCES "ressources" ("id") ON DELETE CASCADE
);

-- -----------------------------------------------------------------------------
COMMIT;