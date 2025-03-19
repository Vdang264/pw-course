# Key Takeaways
## Lesson-1 How to set up a project
### Config
* Git config user name: git config --global user.name VanDang
* Git config user email: git config --global user.email vdang264@gmail.com
* Config default branch git config --global init.defaultBranch name
* If not using global config, remember to config locally on each repo
### Create SSH key 
* Run: ssh-keygen -t rsa -b 4096 -C vdang264@gmail.com
* Get SSH ke value: cat ~/.ssh/id_rsa.pub
### Add SSH key to Github 
* Personal setting > SSH & GPG keys > Add new SSH key > Paste key value there then submit 
### Init Playwright
* Run: npm init playwright@latest
### Push code to Main 
* Run: git push origin main 
### Setup repo 
* Create new repo on Git then get <SSH link>
* Create repo local: git init 
* Link the repo: git remote add origin <SSH link> 
* Add code: git add . 
* Add first commit: git commit -m "init project" 
## Lesson-2 Git
### Add file to Staging area 
* Run: git add "file name" 
* If you want to add all (mostly on init project), run: git add . 
### Make commit 
* Run: git commit -m "Meaning name of the commit" 
* Rule for pw-course: Remember to add prefix chore/feat/fix to the commit name 
### Check git status: 
* Run: git status 
## Lesson-2 JS 
* Declare variables: **var** for updatable variables/ **let** for fixed variables/ **const** for constant 
* Data type: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object
* Comparison operator: ">", "<", "==", "!==", "<=", ">="
* Unary operator: i++, i--
* Arithmetic operator: +, -, x, /
* Conditional (ternary) statement: if (//condition) {//code}
* Loops statement: for (initialization; condition; afterthought)
### Others 
* Print value: console.log () 
* Format code: Opt + Shift + F (or just using extensions for more advance options)