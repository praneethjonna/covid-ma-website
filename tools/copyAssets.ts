import * as shell from "shelljs";

// Copy all the distribution code
shell.cp( "-R", "src/views", "dist/" );
shell.cp( "-R", "src/public", "dist/" );