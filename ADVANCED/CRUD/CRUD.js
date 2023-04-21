let dataUser=[
    {
        id: "user_01",
        avatar:"../CRUD/image/anhcute (1).gif",
        firstName:"Tan",
        lastName:"Dang",
        userName:"dangvomytan@gmail.com"
    },
    {
        id: "user_02",
        avatar:"../CRUD/image/anhcute (2).gif",
        firstName:"Kare",
        lastName:"yoing",
        userName:"kareyoing@gmail.com"
    },
    {
        id: "user_03",
        avatar:"../CRUD/image/anhcute (3).gif",
        firstName:"haa",
        lastName:"yoing",
        userName:"kareyoing@gmail.com"
    },    
    {
        id: "user_04",
        avatar:"../CRUD/image/anhcute (4).gif",
        firstName:"jama",
        lastName:"fuji",
        userName:"kareyoing@gmail.com"
    },    
    {
        id: "user_05",
        avatar:"../CRUD/image/anhcute (5).gif",
        firstName:"sakura",
        lastName:"anata",
        userName:"kareyoing@gmail.com"
    },    
    {
        id: "user_06",
        avatar:"../CRUD/image/anhcute (6).gif",
        firstName:"kute",
        lastName:"yama",
        userName:"kareyoing@gmail.com"
    }
]

 renderUser(dataUser);
function renderUser(array)
{
    const tablrUser=document.querySelector("#tblUser");
    let contentUser =`
            <tr>
                <th>#</th>
                <th>Avata</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>User Name</th>
                <th>Action</th>
            </tr>`;
    array.forEach((dataUser, index) =>
    {
        contentUser+=`
        <tr>
            <td>${index+1}</td>
            <td><img src="${dataUser.avatar}"></td>
            <td>${dataUser.firstName}</td>
            <td>${dataUser.lastName}</td>
            <td>${dataUser.userName}</td>
            <td>
            <button onclick="editUser('${dataUser.id}')"><i class="fa-solid fa-user-pen fa-2xl""></i></button>
            <button onclick="deleteUser('${dataUser.id}')"><i class="fa-solid fa-user-xmark fa-2xl"></i></button>
            </td>
        </tr>
        `
    })
    // console.log(contentUser);
    tablrUser.innerHTML=contentUser;
}


// DELETE DATA
function deleteUser(id)
{ 
    console.log(id);
    dataUser.forEach((User,index) =>
    {
        if(id===User.id)
        dataUser.splice(index,1);
    });
    renderUser(dataUser);
}




// SEARCH DỮ LIỆU 
function handleSearchUser(value)
{
    const dataSearch = dataUser.filter(
        (User) => 
        User.firstName.toLowerCase().includes(value.toLowerCase()) ||
        User.userName.toLowerCase().includes(value.toLowerCase())
    );
    console.log(dataSearch);
    renderUser(dataSearch);
}

function createUser()
{
    const inputAvatar = document.querySelector("#img_avatar").value;
    const inputFirstName = document.querySelector("#tbx_firstName").value;
    const inputLastName = document.querySelector("#tbx_lastName").value;
    const inputUserName = document.querySelector("#tbx_userName").value;
    let newUser = {};
    newUser.id;
    newUser.avatar=inputAvatar;
    newUser.lastName=inputLastName;
    newUser.firstName=inputFirstName;
    newUser.userName=inputUserName;
    dataUser.push(newUser)
    console.log(dataUser);
    renderUser(dataUser);
}
// ===============================================

