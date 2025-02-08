# Comandos Git 😎
---
## 1. Configuración Inicial 🔧

### Configurar Usuario
- **Verificar versión de Git**  
  ```bash
  git version
  ```  
  *Muestra la versión instalada de Git.*

- **Configurar el nombre del usuario**  
  ```bash
  git config --global user.name "Tu nombre aquí"
  ```  
  *Establece el nombre de usuario global.*

- **Configurar el email del usuario**  
  ```bash
  git config --global user.email "tu_email_aquí@example.com"
  ```  
  *Establece el email de usuario global.*

---

## 2. Comandos Básicos de Git 🛠️

### Inicialización y Conexión con Repositorios
- **Iniciar un repositorio local**  
  ```bash
  git init
  ```  
  *Crea un repositorio en la carpeta actual.*

- **Clonar un repositorio remoto**  
  ```bash
  git clone <url_del_repositorio_remoto>
  ```  
  *Clona el repositorio y crea una carpeta con el nombre del proyecto.*

- **Agregar un repositorio remoto a un proyecto existente**  
  ```bash
  git remote add origin <url_del_repositorio_remoto>
  ```  
  *Establece una conexión remota.*

- **Verificar conexiones remotas**  
  ```bash
  git remote -v
  ```  
  *Muestra las conexiones remotas configuradas.*

### Visualización y Estado
- **Ver el estado actual**  
  ```bash
  git status
  ```  
  *Muestra el estado del repositorio local y en qué commit se encuentra.*

- **Abrir Visual Studio Code (u otro editor configurado)**  
  ```bash
  git code .
  ```  
  *Abre el editor en la carpeta actual.*

- **Ver el historial de commits**  
  ```bash
  git log
  ```  
  *Muestra el historial de commits con sus identificadores SHA.*

---

## 3. Preparación y Envío de Cambios 🚀

### Agregar y Confirmar Cambios
- **Agregar todos los archivos para commit**  
  ```bash
  git add .
  ```  
  *Incluye todos los cambios en la lista para ser confirmados.*

- **Realizar un commit con mensaje**  
  ```bash
  git commit -m "mensaje"
  ```  
  *Guarda los cambios con un mensaje descriptivo.*

### Envío (Push)
- **Enviar cambios a la rama remota**  
  ```bash
  git push -u origin <nombre_de_la_rama>
  ```  
  *Sube los commits a la rama especificada (por defecto, a la rama `master` o `main`).*

### Recuperación y Restauración
- **Restaurar cambios en un archivo específico**  
  ```bash
  git restore <nombre_del_archivo>
  ```  
  *Descarta los cambios realizados en el archivo.*

- **Restablecer el repositorio a un commit específico**  
  ```bash
  git reset --hard <SHA_del_commit>
  ```  
  *Vuelve a un estado específico del repositorio usando el identificador del commit.*

---

## 4. Comandos para Trabajar en Equipo 🤝

- **Verificar cambios remotos**  
  ```bash
  git fetch
  ```  
  *Consulta el repositorio remoto para ver nuevos cambios sin integrarlos.*

- **Descargar cambios del repositorio remoto**  
  ```bash
  git pull
  ```  
  *Actualiza el repositorio local con los cambios remotos.*
  
- **Flujo básico en equipo:**  
  1. ```bash
     git add .
     ```
  2. ```bash
     git commit -m "tu mensaje"
     ```
  3. ```bash
     git push -u origin <nombre_de_la_rama>
     ```  
  *Secuencia para preparar y subir cambios.*

### Gestión de Ramas
- **Ver ramas existentes**  
  ```bash
  git branch
  ```  
  *Muestra la lista de ramas locales.*

- **Crear una nueva rama**  
  ```bash
  git branch <nombre_de_la_rama>
  ```  
  *Crea una nueva rama sin cambiarse a ella.*

- **Cambiarse a otra rama**  
  ```bash
  git checkout <nombre_de_la_rama>
  ```  
  *Se mueve a la rama indicada.*

- **Eliminar una rama**  
  ```bash
  git branch -D <nombre_de_la_rama>
  ```  
  *Elimina la rama especificada localmente.*

- **Enviar una rama al repositorio remoto**  
  ```bash
  git push origin <nombre_de_la_rama>
  ```  
  *Sube la rama indicada al remoto.*

- **Unir ramas (Merge):**  
  ```bash
  git merge <nombre_del_branch>
  ```  
  *Fusiona la rama especificada con la rama actual (resuelve conflictos si existen).*

---

## 5. Configuración Git / GitHub ⚙️

```bash
git config --global user.name <name>
git config --global user.email <email>
```

---

## 6. Iniciar un Proyecto Nuevo 🆕

1. **Crear el repositorio en GitHub y copiar la URL.**
2. **Inicializar el repositorio local:**
   ```bash
   git init
   ```
3. **Verificar conexiones remotas:**
   ```bash
   git remote -v
   ```
4. **Agregar la conexión remota:**
   ```bash
   git remote add origin https://github.com/Chukin95/challenge-amigo-secreto.git
   ```
5. **Actualizar el repositorio local (si existen cambios):**
   ```bash
   git pull origin main --rebase
   ```
6. **Verificar estado y modificaciones locales:**
   ```bash
   git status
   ```
7. **Agregar todos los cambios locales:**
   ```bash
   git add .
   ```
8. **Realizar el primer commit:**
   ```bash
   git commit -m "v1.0.0 - primer commit"
   ```
9. **Subir los cambios al repositorio remoto:**
   ```bash
   git push --set-upstream origin main
   ```

---

## 7. Clonación de Repositorios 📋

- **Clonar un repositorio existente:**  
  ```bash
  git clone <repositorio-url>
  ```

- **Clonar y renombrar la carpeta del proyecto:**  
  ```bash
  git clone <repositorio-url> <mi-proyecto-clone>
  ```

- **Clonar y cambiar a una rama específica:**  
  ```bash
  git clone -b <nombre_de_la_rama> <repositorio-url>
  ```  
  *Nota: la opción correcta es `-b` y no `-branch`.*

---

## 8. Visualización del Historial (Log) 📜

- **Historial resumido (una línea por commit):**  
  ```bash
  git log --oneline
  ```

- **Historial completo:**  
  ```bash
  git log
  ```

- **Historial con parches (detalles de cambios):**  
  ```bash
  git log -p
  ```

- **Filtrar por autor:**  
  ```bash
  git log --author="user_name"
  ```

- **Filtrar por rango de fechas:**  
  ```bash
  git log --since=1.month.ago --until=1.day.ago
  ```

- **Formato personalizado en el log:**  
  ```bash
  git log --pretty="format:%h %s"
  ```  
  *Más información: [devhints.io/git-log-format](https://devhints.io/git-log-format)*

- **Ver diferencias en un archivo específico:**  
  ```bash
  git diff <archivo>
  ```

---

## 9. Restauración de Archivos y Commits 🔄

- **Restaurar un archivo a partir de un commit específico:**  
  ```bash
  git restore --source <hash> <archivo>
  ```

- **Resetear cambios (modo general):**  
  ```bash
  git reset
  ```  
  *Existen diferentes modos (soft, mixed, hard) según la necesidad.*

---

## 10. Gestión de Ramas (Branches) 🌿

- **Crear y cambiarse a una nueva rama:**  
  ```bash
  git checkout -b <nombre-de-la-rama>
  ```  
  *Crea la rama y te mueve a ella.*

- **Crear una rama sin cambiarse a ella:**  
  ```bash
  git branch <nombre-de-la-rama>
  ```

- **Cambiarse a otra rama existente (alternativa moderna):**  
  ```bash
  git switch <nombre-de-la-rama>
  ```

---

## 11. Mezcla de Ramas (Merge) 🔀

1. **Cambiarse a la rama principal (por ejemplo, `main`):**  
   ```bash
   git switch main
   ```  
   *O también:*
   ```bash
   git checkout main
   ```
2. **Fusionar otra rama en la rama principal:**  
   ```bash
   git merge <nombre-de-la-otra-rama>
   ```
3. **Subir los cambios fusionados al remoto:**  
   ```bash
   git push -u origin main
   ```
