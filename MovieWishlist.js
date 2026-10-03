const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let movies = [];

function showMenu() {
  console.log("\n===== MOVIE WISHLIST =====");
  console.log("1. Add Movie");
  console.log("2. View Movies");
  console.log("3. Mark Movie as Watched");
  console.log("4. Delete Movie");
  console.log("5. Exit");

  rl.question("Choose an option: ", choice => {
    if (choice === "1") {
      addMovie();
    } else if (choice === "2") {
      viewMovies();
    } else if (choice === "3") {
      markWatched();
    } else if (choice === "4") {
      deleteMovie();
    } else if (choice === "5") {
      console.log("Thank you for using Movie Wishlist!");
      rl.close();
    } else {
      console.log("Invalid choice. Try again.");
      showMenu();
    }
  });
}

// Add a movie
function addMovie() {
  rl.question("Enter movie title: ", title => {
    if (title.trim() === "") {
      console.log("Movie title cannot be empty!");
      showMenu();
      return;
    }

    rl.question("Enter movie genre: ", genre => {
      const movie = {
        title: title.trim(),
        genre: genre.trim() || "Unknown",
        watched: false
      };

      movies.push(movie);
      console.log("Movie added to your wishlist!");

      showMenu();
    });
  });
}

// View all movies
function viewMovies() {
  console.log("\n===== YOUR MOVIE WISHLIST =====");

  if (movies.length === 0) {
    console.log("Your wishlist is empty.");
  } else {
    movies.forEach((movie, index) => {
      const status = movie.watched ? "Watched" : "Not Watched";

      console.log(`\n${index + 1}. ${movie.title}`);
      console.log(`Genre: ${movie.genre}`);
      console.log(`Status: ${status}`);
    });
  }

  showMenu();
}

// Mark a movie as watched
function markWatched() {
  if (movies.length === 0) {
    console.log("No movies available.");
    showMenu();
    return;
  }

  viewMovieChoices();

  rl.question("Enter movie number to mark as watched: ", answer => {
    const number = Number(answer);

    if (
      answer.trim() === "" ||
      !Number.isInteger(number) ||
      number < 1 ||
      number > movies.length
    ) {
      console.log("Invalid movie number!");
    } else if (movies[number - 1].watched) {
      console.log("This movie is already marked as watched.");
    } else {
      movies[number - 1].watched = true;
      console.log("Movie marked as watched!");
    }

    showMenu();
  });
}

// Display movie choices
function viewMovieChoices() {
  console.log("\n===== MOVIES =====");

  movies.forEach((movie, index) => {
    console.log(`${index + 1}. ${movie.title}`);
  });
}

// Delete a movie
function deleteMovie() {
  if (movies.length === 0) {
    console.log("No movies to delete.");
    showMenu();
    return;
  }

  viewMovieChoices();

  rl.question("Enter movie number to delete: ", answer => {
    const number = Number(answer);

    if (
      answer.trim() === "" ||
      !Number.isInteger(number) ||
      number < 1 ||
      number > movies.length
    ) {
      console.log("Invalid movie number!");
    } else {
      const removed = movies.splice(number - 1, 1);
      console.log(`${removed[0].title} was deleted.`);
    }

    showMenu();
  });
}

// Run the program
showMenu();