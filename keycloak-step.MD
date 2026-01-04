###### 1.1 Créer le fichier `docker-compose.yml`

```yaml
version: "3"

services:
  postgres:
    image: postgres:15
    container_name: business-atps-postgres
    environment:
      POSTGRES_DB: keycloak
      POSTGRES_USER: keycloak
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - atps-network
    healthcheck:
      test: ["CMD", "pg_isready", "-U", "keycloak"]
      interval: 5s
      timeout: 10s
      retries: 10

  keycloak:
    image: quay.io/keycloak/keycloak:25.0
    container_name: business-atps-keycloak
    volumes:
      - ./realms/realm-export.json:/opt/keycloak/data/import/realm-export.json:ro
    command:
      - start-dev
      - --import-realm
    environment:
      KC_DB: postgres
      KC_DB_URL_HOST: postgres
      KC_DB_URL_DATABASE: keycloak
      KC_DB_USERNAME: keycloak
      KC_DB_PASSWORD: password
      KC_DB_SCHEMA: public
      KEYCLOAK_ADMIN: admin
      KEYCLOAK_ADMIN_PASSWORD: admin
      KC_BOOTSTRAP_ADMIN_USERNAME: admin
      KC_BOOTSTRAP_ADMIN_PASSWORD: admin
    ports:
      - "8080:8080"
    networks:
      - atps-network
    depends_on:
      postgres:
        condition: service_healthy

volumes:
  postgres-data:

networks:
  atps-network:
    driver: bridge
```

###### 1.2 Démarrer les conteneurs

```bash
docker-compose up -d
```

###### 1.3 Vérifier que Keycloak fonctionne

Ouvrez votre navigateur : `http://localhost:8080`

Vous devriez voir la page d'accueil Keycloak.

###### 1.4 : Connexion à l'Admin Console

1. Allez sur `http://localhost:8080`
2. Cliquez sur **Administration Console**
3. Connectez-vous :
   - **Username** : `admin`
   - **Password** : `admin`
4. Cliquez sur **Sign In**

###### 1.4 : Créer le Realm

1. En haut à gauche, vous voyez le realm actuel (probablement **master**)
2. Cliquez sur le **dropdown du realm** (à côté de "master")
3. Cliquez sur **Create Realm**
4. Remplissez :
   ```bash
   Realm name: atps-auth
   Enabled: ON (coché)
   ```
5. Cliquez sur **Create**

✅ Vous êtes maintenant dans le realm **atps-auth**

###### 1.5 : Créer les Realm Roles

1. Dans le menu de gauche, cliquez sur **Realm roles**
2. Cliquez sur **Create role**

### Créez ces 4 rôles un par un :

#### Rôle 1 : admin
```bash
Role name: admin
Description: Full administrator access
```
Cliquez sur **Save**

#### Rôle 2 : school_admin
```bash
Role name: school_admin
Description: School administrator
```
Cliquez sur **Save**

#### Rôle 3 : instructor
```bash
Role name: instructor
Description: Course instructor
```
Cliquez sur **Save**

#### Rôle 4 : student
```bash
Role name: student
Description: Student user
```
Cliquez sur **Save**

✅ Vous devriez maintenant avoir 4 rôles créés

######  1.6 Créer le Client
1. Dans le menu de gauche, cliquez sur **Clients**
2. Cliquez sur **Create client**

### General Settings (Étape 1/3)

```bash
Client type: OpenID Connect
Client ID: atps-auth
Name: ATPS Authentication
Description: Authentication client for ATPS application
Always display in console: OFF
```

Cliquez sur **Next**

### Capability config (Étape 2/3)

```bash
Client authentication: ON (activé)
Authorization: OFF (désactivé)

Authentication flow:
✓ Standard flow (coché)
✓ Direct access grants (coché)
□ Implicit flow (décoché)
□ Service accounts roles (décoché)
□ OAuth 2.0 Device Authorization Grant (décoché)
□ OIDC CIBA Grant (décoché)
```

Cliquez sur **Next**

### Login settings (Étape 3/3)

```bash
Root URL: http://localhost:3000
Home URL: http://localhost:3000

Valid redirect URIs:
http://localhost:3000/*
http://localhost:3000/api/auth/callback/keycloak

Valid post logout redirect URIs:
http://localhost:3000/*

Web origins:
http://localhost:3000
+
```

Cliquez sur **Save**

### Récupérer le Client Secret

1. Restez sur la page du client **atps-auth**
2. Allez dans l'onglet **Credentials**
3. Copiez le **Client secret**
4. Ajoutez-le dans votre fichier `.env` :

```bash
DATABASE_URL="postgres://keycloak:password@localhost:5432/keycloak?schema=public"

# Auth.js Configuration (OBLIGATOIRE)
AUTH_SECRET=sS/YOF+fkL++s3g6gp5b++3KHJ8YXrJ5wD4wAKcMNQM=
AUTH_URL=http://localhost:3000

# Keycloak Configuration
AUTH_KEYCLOAK_ID=atps-auth
AUTH_KEYCLOAK_SECRET=y1STQIrMPvd75SeBIRmBxAlVfaSiefw2
AUTH_KEYCLOAK_ISSUER=http://localhost:8080/realms/atps-auth

# Public (seulement si nécessaire côté client)
NEXT_PUBLIC_AUTH_URL=http://localhost:3000
```

✅ Client configuré avec succès

###### 1.7 Configurer le Mapper pour inclure les rôles
### Accéder au Client Scope dédié

1. Toujours dans **Clients** → **atps-auth**
2. Cliquez sur l'onglet **Client scopes**
3. Dans la section **Assigned client scopes**, cliquez sur **atps-auth-dedicated**

### Créer le Mapper pour les Realm Roles

1. Dans **atps-auth-dedicated**, cliquez sur l'onglet **Mappers**
2. Cliquez sur **Configure a new mapper**
3. Dans la liste, cherchez et cliquez sur **User Realm Role**

### Configurer le Mapper

```bash
Name: realm-roles
Mapper Type: User Realm Role
Multivalued: ON (activé)
Token Claim Name: realm_access.roles
Claim JSON Type: String
Add to ID token: ON (activé)
Add to access token: ON (activé)
Add to userinfo: ON (activé)
Add to lightweight access token: OFF (désactivé)
```

Cliquez sur **Save**

✅ Le mapper est créé - les rôles seront maintenant dans le token

###### 1.8 Créer des utilisateurs de test

### Utilisateur Admin

1. Dans le menu de gauche, cliquez sur **Users**
2. Cliquez sur **Add user**

**Informations** :
```
Username: admin.user
Email: admin@atps.com
Email verified: ON (coché)
First name: Admin
Last name: User
```

Cliquez sur **Create**

**Définir le mot de passe** :
1. Allez dans l'onglet **Credentials**
2. Cliquez sur **Set password**
3. Remplissez :
   ```
   Password: Admin123!
   Password confirmation: Admin123!
   Temporary: OFF (décoché - important!)
   ```
4. Cliquez sur **Save**
5. Confirmez en cliquant sur **Save password**

**Assigner le rôle** :
1. Allez dans l'onglet **Role mapping**
2. Cliquez sur **Assign role**
3. Assurez-vous que le filtre est sur **Filter by realm roles**
4. Cochez le rôle **admin**
5. Cliquez sur **Assign**

✅ Utilisateur admin créé

### Utilisateur School Admin

Répétez le processus :

```
Username: school.admin
Email: school@atps.com
Email verified: ON
First name: School
Last name: Admin

Password: School123!
Temporary: OFF

Role: school_admin
```

### Utilisateur Instructor

```
Username: instructor.doe
Email: instructor@atps.com
Email verified: ON
First name: John
Last name: Doe

Password: Instructor123!
Temporary: OFF

Role: instructor
```

### Utilisateur Student

```
Username: student.smith
Email: student@atps.com
Email verified: ON
First name: Jane
Last name: Smith

Password: Student123!
Temporary: OFF

Role: student
```

✅ 4 utilisateurs de test créés (un par rôle)


###### 1.9 Vérifier la configuration

### Vérifier les Realm Roles

1. Menu de gauche → **Realm roles**
2. Vous devriez voir :
   - admin
   - school_admin
   - instructor
   - student

### Vérifier le Client

1. Menu de gauche → **Clients** → **atps-auth**
2. Onglet **Settings** :
   - Client authentication: **ON**
   - Valid redirect URIs contient votre URL
3. Onglet **Credentials** :
   - Le Client secret est visible
4. Onglet **Client scopes** :
   - **atps-auth-dedicated** est présent
5. Dans **atps-auth-dedicated** → **Mappers** :
   - Le mapper **realm-roles** existe

### Vérifier les utilisateurs

1. Menu de gauche → **Users**
2. Cliquez sur **View all users**
3. Vous devriez voir vos 4 utilisateurs
4. Pour chaque utilisateur, vérifiez :
   - Onglet **Credentials** : Le mot de passe est défini (apparaît comme *****)
   - Onglet **Role mapping** : Le rôle approprié est assigné


###### 2.0 Tester avec votre application Next.js
###### 2.1 Verifier le logs
###### 2.2 Verifier votre prisma pour asserer que le users a ete synchronise

###### 2.3 Configuration SMTP pour l'envoi d'emails dans Keycloak

## Gmail (Pour production ou test réel) 📮 
<!-- Link pour le passwrd https://myaccount.google.com/apppasswords -->
### Créer un mot de passe d'application Gmail

1. Allez sur votre compte Google : https://myaccount.google.com/
2. Sécurité → **Validation en deux étapes** (activez-la si ce n'est pas déjà fait)
3. Retournez dans Sécurité → **Mots de passe des applications**
4. Sélectionnez :
   - App : **Mail**
   - Appareil : **Autre (nom personnalisé)** → Tapez "Keycloak ATPS"
5. Cliquez sur **Générer**
6. **Copiez le mot de passe** généré (16 caractères sans espaces)

### Configurer Gmail dans Keycloak

1. Keycloak Admin Console → **Realm settings** → **Email**
2. Remplissez :

```
From: cloudarmelpro@gmail.com
From display name: ATPS Platform
Reply to: cloudarmelpro@gmail.com
Reply to display name: ATPS Support

Host: smtp.gmail.com
Port: 587
Encryption: Enable StartTLS (coché)
Authentication: ON (coché "Enable authentication")

Username: cloudarmelpro@gmail.com
Password: pdta bowr aacl pgpg
```

3. Cliquez sur **Save**
4. Cliquez sur **Test connection**

✅ Vous devriez recevoir un email de test sur votre Gmail