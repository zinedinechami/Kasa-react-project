function Collapse(prop) {
  return (
    <>
      <button type="button" className="collapse">
        button name
      </button>
      <div className="collapse_content">
        <p>collapse content</p>
      </div>
    </>
  );
}

export default Collapse;

const collapse = document.querySelectorAll(".collapse");
const collapse_content = document.querySelector(".collapse_content");

console.log(collapse);

// function openCollapse() {
//   if (collapse_content.style.display === "none") {
//     collapse_content.style.display = "block";
//   } else {
//     collapse_content.style.display = "none";
//   }
// }

// collapse.addEventListener("click", openCollapse);
