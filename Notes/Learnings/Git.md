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