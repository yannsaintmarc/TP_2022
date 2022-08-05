-- workshop creation table script

BEGIN;

DROP TABLE IF EXISTS "theme", "containtheme", "workspace", "containressources", "containmedia", "creator", "ressources", "media";

-- ---------------------------------------------------------------
-- Table "theme"

CREATE TABLE IF NOT EXISTS "theme" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "titletheme" TEXT,
  "day" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "image" TEXT NULL,
  "theme_presentation" TEXT
  );
-- -------------------------------------------------------------------
-- Table "workspace"

CREATE TABLE IF NOT EXISTS "workspace" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "titleworkspace" TEXT NOT NULL,
  "day" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "owner" TEXT NOT NULL,
  "workspace_presentation" TEXT
);

-- ---------------------------------------------------------------------------
-- Table "user"

CREATE TABLE IF NOT EXISTS "creator" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "username" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "lastname" TEXT NOT NULL,
  "firstname" TEXT NOT NULL,
  "adresse" TEXT,
  "town" TEXT,
  "zip code" TEXT, 
  "email" TEXT NOT NULL,
  "phone" INT,
  "creation_date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "social_network" TEXT,
  "titleworkspace" INT REFERENCES "workspace" ("id"),
  "titlemedia" INT REFERENCES "workspace" ("id"),
  "titletheme" INT REFERENCES "workspace" ("id")
);

-- ---------------------------------------------------------------------------
-- Table "ressources"

CREATE TABLE IF NOT EXISTS "ressources" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "titleressources" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "link" TEXT
);

-- ---------------------------------------------------------------------------
-- Table "media"

CREATE TABLE IF NOT EXISTS "media" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "titlemedia" TEXT,
  "author" TEXT,
  "day" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "type" TEXT,
  "material" TEXT,
  "size" INT,
  "weight" INT,
  "media_presentation" TEXT
);

-- ----------------------------------------------------------------
-- Table "containtheme"

CREATE TABLE IF NOT EXISTS "containtheme" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "titleworkspace" INT NOT NULL REFERENCES "workspace" ("id"),
  "titletheme" INT NOT NULL REFERENCES "theme" ("id")
  );
-- ----------------------------------------------------------------------
-- Table "containressources"

CREATE TABLE IF NOT EXISTS "containressources" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "titletheme" INT NOT NULL REFERENCES "theme" ("id"),
  "titlemedia" INT NOT NULL REFERENCES "media" ("id"),
  "titleressources" INT NOT NULL REFERENCES "ressources" ("id")
);

-- ---------------------------------------------------------------------------
-- Table "containmedia"

CREATE TABLE IF NOT EXISTS "containmedia" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "titletheme" INT NOT NULL REFERENCES "theme" ("id"),
  "titlemedia" INT NOT NULL REFERENCES "media" ("id")
);

-- -----------------------------------------------------------------------------
COMMIT;