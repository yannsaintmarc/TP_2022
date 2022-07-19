-- workshop creation table script

BEGIN;

DROP TABLE IF EXISTS "theme", "containtheme", "workspace", "containressources", "containmedia", "user", "ressources", "media";

-- ---------------------------------------------------------------
-- Table "theme"

CREATE TABLE IF NOT EXISTS "theme" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "titletheme" VARCHAR (64),
  "date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- -------------------------------------------------------------------
-- Table "workspace"

CREATE TABLE IF NOT EXISTS "workspace" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "titleworkspace" TEXT NOT NULL,
  "date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "owner" TEXT NOT NULL
);

-- ---------------------------------------------------------------------------
-- Table "user"

CREATE TABLE IF NOT EXISTS "user" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "username" VARCHAR(128) NOT NULL,
  "password" VARCHAR(42) NOT NULL,
  "lastname" VARCHAR(256) NOT NULL,
  "firstname" VARCHAR(256) NOT NULL,
  "adresse" VARCHAR(256) NOT NULL,
  "email" VARCHAR(42) NOT NULL,
  "phone" INT,
  "creation_date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "social_network" VARCHAR(42),
  "titleworkspace" INT NOT NULL REFERENCES "workspace" ("id"),
  "titlemedia" INT NOT NULL REFERENCES "workspace" ("id"),
  "titletheme" INT NOT NULL REFERENCES "workspace" ("id")
);

-- ---------------------------------------------------------------------------
-- Table "ressources"

CREATE TABLE IF NOT EXISTS "ressources" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "titleressources" VARCHAR(256) NOT NULL,
  "type" VARCHAR(64) NOT NULL,
  "link" VARCHAR(64)
);

-- ---------------------------------------------------------------------------
-- Table "media"

CREATE TABLE IF NOT EXISTS "media" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "titlemedia" VARCHAR(256),
  "author" VARCHAR(64),
  "date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "type" VARCHAR(64),
  "material" VARCHAR(64),
  "size" INT,
  "weight" INT
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