var Git = require("nodegit");
var npm = require("npm");

const repos = [
    { Name: "James Cerniglia", Project: "https://github.com/cerniglj1/2017FitnessApp", Exam: "" },
    { Name: "Jack Closs", Project: "https://github.com/JX49/Web_Programming_Fall_2017_ExerciseApp.git", Exam: "" },
    { Name: "Tyler Conklin", Project: "https://github.com/Conklint2/FinalClient", Exam: "https://github.com/Conklint2/FinalServer" },
    { Name: "Jamie Danton", Project: "https://github.com/dantonj1/2017WEBCLIENT", Exam: "https://github.com/dantonj1/2017WEBSERVER" },
    { Name: "Anthony DiNardi", Project: "https://github.com/NinoD1995/fitness-tracker", Exam: "" },
    { Name: "Damian Depuy", Project: "https://github.com/DamianDepuy/gainzville.git", Exam: "" },
    { Name: "Anthony DiNardi", Project: "https://github.com/NinoD1995/fitness-tracker", Exam: "" },
    { Name: "Nicholas Domenech", Project: "https://github.com/ndomenech/My_fitness_app", Exam: "" },
    { Name: "Joseph Echeverria", Project: "", Exam: "https://github.com/echjos08/eFitnessApp" },
    { Name: "Fatma Farag", Project: "https://github.com/fatmafarag/TheFinalProject2017", Exam: "" },
    { Name: "Brandon Flynn", Project: "https://github.com/BrandonFlynn/FitnessTracker", Exam: "" },
    { Name: "Richard Hampton", Project: "https://github.com/champton95/myFitnessAppFinal", Exam: "" },
    { Name: "Allen Kozlowski", Project: "https://github.com/AllenKoz/FitnessApp", Exam: "https://github.com/AllenKoz/FitnessApp/blob/master/src/app/exercise/exercise.component.html" },
    { Name: "Michael Manteo", Project: "https://github.com/michaelmanteo/2017_fall_project_exercise_app", Exam: "" },
    { Name: "Kevyn Martinez", Project: "https://github.com/Kevyn-Martinez/Fitness_Traker", Exam: "" },
    { Name: "Sylum Mastropaolo", Project: "https://github.com/SylumMastropaolo/FitnessTrackerProject", Exam: "" },
    { Name: "Mario Mena", Project: "https://github.com/N02959575/WPFall17", Exam: "" },
    { Name: "Ryan Mercadante", Project: "https://github.com/ryanmerc/mean-gitfit.git", Exam: "" },
    { Name: "Lee Miller", Project: "https://github.com/millerl2/fitU.git", Exam: "" },
    { Name: "Nicholas Moy", Project: "https://github.com/Ncm9658/fitnessapptest", Exam: "" },
    { Name: "Hoang Nguyen", Project: "https://github.com/N03235893/FitnessWeb", Exam: "" },
    { Name: "Zachary Remling", Project: "https://github.com/remlingz1/Work-Out-U.git", Exam: "" },
    { Name: "Steven Selementi", Project: "https://github.com/N03297857/2017Fall", Exam: "" },
    { Name: "Dhruv Shah", Project: "https://github.com/shahd5/FitnessTrack", Exam: "" },
    { Name: "Daniel Sloan", Project: "https://github.com/DDSloan96/fitnessTrackerAng/", Exam: "" },
    { Name: "Michael Smith", Project: "https://github.com/Smith-MichaelJ1995/Fitness-App-Angular-4.0.git", Exam: "" },
    { Name: "Emily Venuto", Project: "https://github.com/evenuto/POWERApp/", Exam: "" },
    { Name: "Steven Viscione", Project: "https://github.com/sviscione13/webdevtracker2017", Exam: "" },
    { Name: "Otto Vogrincic", Project: "https://github.com/ovogrin/WP2017_fitness_tracker", Exam: "" },
    { Name: "Eric Whaley", Project: "https://github.com/DreamSphinx/2017fall2", Exam: "" },
    { Name: "Samuel Zierler", Project: "https://github.com/SnidleyWhiplash/returnsuccess", Exam: "" },
];

function cloneOneRepo(i){
    const repo = repos[i];
    const wDir = __dirname + "/" + repo.Name;

    Git .Clone(repo.Project, wDir )
        .then(function(repo) {
            if(i < repos.length - 1){
                cloneOneRepo(i + 1);
            }
        })
        .catch(function(err) { console.log(err); });
}
//cloneOneRepo(0);

function initOneRepo(i){
    const repo = repos[i];
    const wDir = __dirname + "/" + repo.Name;
    process.chdir(wDir);
    console.log(process.cwd());

    npm.load(function(err, npm){
        npm.commands.install([], err=>{
            // if you want them all to start up we can put something like npm.commands.run(['server']);
            process.chdir(__dirname + "/..");
            console.log(process.cwd())
            if(i < repos.length - 1){
                initOneRepo(i + 1);
            }
        })
    });
}
//initOneRepo(0);