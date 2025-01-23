// let arr=[23,4324,342,312,4324]
// let total=0;

// arr.map(item=>{
//     total+=item
// })
// console.log(total);

// ===================Array Push and Add to another arry====================
// ==========================================================================

// let arr = [23, 4324, 342, 312, 4324, 3, 30, 29];
// let newarr = [];

// arr.map((item) => {
//   if (item > 50) {
//     newarr.push(item);
//   }
// });
// console.log(newarr);

// ===================Array - Finding alphabet and names or typo ====================
// ==========================================================================

// let arr=["Saife", "jumi", "salma", "people"]

// arr.map(item=>{
//     if(item.toLowerCase().charAt(0)=="s"){
//         console.log(item);
//     }
// });

let card_container = document.querySelector(".card_container");
let name_input = document.querySelector(".name_input");
let name_input_btn = document.querySelector(".name_input_btn");
let name_update_btn = document.querySelector(".name_update_btn");
let name_arr = [];
let index_store;
name_update_btn.style.display = "none";

// console.log(
//   name_input,
//   name_input_btn,
//   search_name_input,
//   search_name_input_btn
// );

//=========================== Array inject names========================>
name_input_btn.addEventListener("click", function () {
  //   console.log(name_input.value);

  name_arr.push({
    name_input: name_input.value,
  });
  name_input.value = "";
  card_container.innerHTML = "";
  name_save();
});

//=========================== Array update delete names========================>
function name_save() {
  name_arr.map((item) => {
    card_container.innerHTML += `<div class="card w-50 mb-3">
        <div class="card-body">
          <h5 class="card-title">${item.name_input}</h5>
          <a href="#" class="btn btn-primary name_edit">Edit</a>
          <a href="#" class="btn btn-danger name_delt">Delete</a>
        </div>
      </div>`;
  });
  let name_delt = document.querySelectorAll(".name_delt");
  let name_delt_covert = Array.from(name_delt);

  name_delt_covert.map((item, index) => {
    item.addEventListener("click", function () {
      name_arr.splice(index, 1);
      card_container.innerHTML = "";
      name_input.value = "";
      name_save();
    });
  });

  let name_edit = document.querySelectorAll(".name_edit");
  let name_edit_covert = Array.from(name_edit);

  name_edit_covert.map((item2, index) => {
    item2.addEventListener("click", function () {
      name_input.value = name_arr[index].name_input;

      //   console.log(name_arr[index].name_input)
      name_input_btn.style.display = "none";
      name_update_btn.style.display = "inline-block";
      index_store = index;
    });
  });
}

//=========================== Array Update button re-inject names========================>
name_update_btn.addEventListener("click", function () {
  name_arr[index_store].name_input = name_input.value;

  console.log(name_arr[index_store].name_input);
  card_container.innerHTML = "";
  name_input.value = "";
  name_input_btn.style.display = "inline-block";
  name_update_btn.style.display = "none";
  name_save();
});

//=========================== Array Search button finding names========================>
let search_name_input = document.querySelector(".search_name_input");
let search_name_input_btn = document.querySelector(".search_name_input_btn");

search_name_input_btn.addEventListener("click", () => {
  card_container.innerHTML = "";
  name_arr.map((item) => {
    if (item.name_input.slice(0,search_name_input.value.length) == search_name_input.value) {
      card_container.innerHTML += `<div class="card w-50 mb-3">
        <div class="card-body">
          <h5 class="card-title">${item.name_input}</h5>
          <a href="#" class="btn btn-primary name_edit">Edit</a>
          <a href="#" class="btn btn-danger name_delt">Delete</a>
        </div>
      </div>`;
    }
  });
});

// name_arr.map(item3=>{
//     console.log(item3)
// })
