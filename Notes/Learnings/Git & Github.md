# Git — My Beginner Notes

## What Git is
Git is a version control system that saves **checkpoints** of my code so I can:
- track what changed
- undo mistakes
- go back to older versions
- share code later (with GitHub)

## The 3 main areas
- **Working directory**: the files I’m editing right now
- **Staging area**: the changes I’ve chosen to include in the next commit
- **Commit history (repo)**: saved snapshots (commits)

## The basic workflow (what I do most)
1. Edit code
2. `git status` (see what changed)
3. `git add <file>` (choose changes for next commit)
4. `git commit -m "message"` (save snapshot)

## Commands I learned

### Start Git tracking in a folder
- `git init`
  - Creates a new Git repo in the current folder (makes a hidden `.git` folder)

### See what changed
- `git status`
  - Shows what’s modified/new/deleted
  - Shows what’s staged vs not staged

### See the actual line-by-line changes
- `git diff`
  - Shows changes that are NOT staged yet

- `git diff --staged`
  - Shows changes that ARE staged (will go into the next commit)

### Stage changes (choose what goes into the next commit)
- `git add weather.js`
  - Stages only that file

- `git add .`
  - Stages ALL changes in the current folder (new/modified/deleted)

### Save a snapshot (commit)
- `git commit -m "My message"`
  - Creates a commit from whatever is staged

## Understanding `git diff` showing `:`
If I run `git diff` and my terminal prompt becomes just `:`
- Git opened a **pager** (a scroll view like `less`)
- Press **`q`** to quit and return to `PS C:\...>`

If I don’t want the pager:
- `git --no-pager diff`

## How to read history
- `git log --oneline`
  - Shows a short list of commits

- `git show <commit-id>`
  - Shows what changed in a specific commit

## Tips I want to remember
- Make small commits often (easier to understand and fix)
- Commit message should describe what changed (and ideally why)

## Warning: secrets
Don’t commit API keys or passwords.
If I need keys:
- put them in `.env`
- add `.env` to `.gitignore`

---

# GitHub — My Beginner Notes

## What GitHub is
- GitHub is a **website** that hosts Git repositories.
- My local Git repo lives on my machine; the GitHub repo is a **remote copy in the cloud**.
- I use GitHub for backup, sharing, and collaboration.

## Repositories (repos) on GitHub
- A GitHub repo is a project with:
  - code
  - commit history
  - extra features like issues and pull requests.
- Example URL: `https://github.com/seekernimbus25/learning-vibe`

## Linking my local repo to GitHub
- `git remote add origin https://github.com/seekernimbus25/learning-vibe.git`
  - Adds a **remote** named `origin` that points to my GitHub repo.
- `git branch -M main`
  - Renames my current branch to **main** (modern default branch name).
- `git push -u origin main`
  - Uploads my local `main` branch to GitHub.
  - Sets **upstream**, so later I can just run:
    - `git push` to send new commits up to GitHub
    - `git pull` to bring new commits down from GitHub

## Cloning from GitHub
- `git clone <repo-url>`
  - Example: `git clone https://github.com/seekernimbus25/learning-vibe.git`
  - Downloads the repo (files + history) into a new folder.

## Daily flow with GitHub
1. Work locally:
   - edit files
   - `git add ...`
   - `git commit -m "message"`
2. Sync with GitHub:
   - `git push` (upload my commits)
3. Update from GitHub when needed:
   - `git pull` (download new commits from the remote)

## README and .gitignore on GitHub
- `README.md`
  - Shown on the front page of the GitHub repo.
  - Good place to explain what the project does and how to run it.
- `.gitignore`
  - Tells Git which files/folders to ignore (so they never reach GitHub).
  - Examples: `.env`, `node_modules/`

## Secrets and public repos
- Public GitHub repos are visible to everyone.
- API keys should stay in `.env` (which is ignored by Git) and **not** in committed code.

## Mental model
- **Local Git** = my working copy and history on this machine.
- **GitHub** = the shared, remote copy of the repo.
- `push` = send my commits **up** to GitHub.
- `pull` = bring commits **down** from GitHub into my local repo.