function Collapse(prop) {
  return (
    <>
      <button type="button" className="collapse">
        button name
      </button>
      <div class="collapse_content">
        <p>collapse content</p>
      </div>
    </>
  );
}

const collapse = document.querySelector(".collapse");
const collapse_content = document.querySelector(".collapse_content");

// function openCollapse() {
//   if (collapse_content.style.display === "none") {
//     collapse_content.style.display = "block";
//   } else {
//     collapse_content.style.display = "none";
//   }
// }

// collapse.addEventListener("click", openCollapse);

export default Collapse;
