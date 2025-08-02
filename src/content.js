console.log("first");
console.log("second");

if (location.hostname === "github.com") {;
    location.href = `http://codeberg.org${location.pathname.replace("/tree/", "/src/branch/").replace("/blob/", "/src/branch/")}`;
} else if (location.hostname === "codeberg.org") {
    location.href = `http://github.com${location.pathname.replace("/src/branch/", "/tree/")}`;
}