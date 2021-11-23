var listArray = [];
var list_of_buttons = [];
var i = 0;
var j = 0;
var k = 0;
var firstApiResponse = null;
var api = 'http://10.1.6.87:8080/api/';
// var delApi = 'http://localhost:8080/api/store/'


var config = {
    headers: {
        'Content-Type': 'application/json',
        'Client-Token': 'ZsPdUgSTQbt26kFiRKG/PQ==',
        'X-Auth-Token': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHBsYWRtaW4iLCJhdXRoIjpbIkFkbWluIl0sImlhdCI6MTYzNTkzOTA5MiwiZXhwIjoxNjY3NDc1MDkyfQ.Ob7-BwIlb65zJY9taz0f0_v2k2ToxvH8Ry3JblxWhXQ',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
    }
}


window.onload = initialValue;
async function initialValue() {

    let payload = {
        "permissionName": "Link",
        "permissionDescription": "Store Users Management",
        "permissionGroup": "Users",
        "permissionControl": "MENU",
        "icon": "sub-icon",
        "permissionLevel": "Store Users Management",
        "rankData": "19"
    };

    try {
        firstApiResponse = await axios.get(`${api}store/getParentChild`, payload, config);
        let len = firstApiResponse.data[0].payLoad.length;
        console.log(firstApiResponse);





        let parentMenus = document.getElementById('childs');
        if (parentMenus.innerHTML === '') {
            for (let x = 0; x < len; x++) {

                let parentDelId = firstApiResponse.data[0].payLoad[x].id;
                // console.log('hi',parentDelId);

                let value = (firstApiResponse.data[0].payLoad[x].module);

                let childlen = firstApiResponse.data[0].payLoad[x].menus.length

                // console.log(childlen);
                for (s = 0; s < childlen; s++) {

                    let childDelId = firstApiResponse.data[0].payLoad[x].menus[s].subMenu.id;
                    // console.log(childDelId);


                    // let childValue = firstApiResponse.data[0].payLoad[x].menus[s].subMenu.subMenuName
                }
                // console.log(len);
                listArray.push(value);
                // console.log(listArray)
                {


                    let item = document.getElementById('usr');
                    let itemValue = item.value;
                    // listArray.push(itemValue);
                    // console.log(listArray);
                    let additem = document.getElementById('list')
                    let li = document.createElement('li');
                    li.setAttribute('class', 'addeditmes animate__animated animate__backInDown nav-item');
                    li.setAttribute('id', 'list' + i);
                    additem.appendChild(li);

                    let anchor = document.createElement('a');
                    anchor.setAttribute('class', 'anchorstyle nav-link active')
                    anchor.setAttribute('data-toggle', 'tab')
                    anchor.setAttribute('href', '#subdiv');
                    li.appendChild(anchor);

                    let div1 = document.createElement('div');
                    div1.setAttribute('class', 'textcolor animate__animated animate__fadeInDown');

                    let editbtn = document.createElement('button')
                    div1.appendChild(editbtn);
                    editbtn.setAttribute('id', 'edit' + i)
                    editbtn.innerHTML = "<i class='ri-pencil-fill'></i>";

                    let menupara = document.createElement('p')
                    menupara.setAttribute('id', 'menuName' + i)
                    div1.appendChild(menupara);
                    menupara.innerText = value;

                    let div2 = document.createElement('div');
                    div2.setAttribute('class', 'addminus')

                    let btn1 = document.createElement('button');
                    btn1.setAttribute('class', 'btn ')
                    btn1.setAttribute('id', 'add' + i);
                    btn1.innerHTML = "<i class='ri-add-circle-fill'></i>"
                    list_of_buttons.push(btn1);

                    let btn2 = document.createElement('button');
                    btn2.setAttribute('class', 'btn');
                    btn2.setAttribute('id', 'delete' + i);
                    btn2.innerHTML = "<i class='ri-close-circle-fill'></i>"

                    div2.appendChild(btn1)
                    div2.appendChild(btn2)

                    anchor.appendChild(div1)
                    anchor.appendChild(div2)

                    let remove = function () {

                        // let delParentApi=await axios.del(`${delApi}parentDelId`, payload, config) 


                        this.parentNode.parentNode.parentNode.remove();

                        // document.getElementById('subdiv'+i).remove();  

                        // listArray.splice(i-1,1);
                        // console.log( listArray);
                        //    let x=document.getElementById('list'+(i-1));
                        // console.log(x);
                    };

                    const paragraph = document.getElementById('menuName' + i);

                    subMainDiv = function () {

                        let z = document.getElementById('childs')

                        if (z.innerHTML === '') {
                            let sub = document.createElement('div');
                            sub.setAttribute('id', 'subdiv');
                            sub.setAttribute('class', 'subchildstyle  tab-pane active');
                            z.appendChild(sub);


                            let subInputDiv = document.createElement('div');
                            subInputDiv.setAttribute('id', 'subhead' + j);
                            subInputDiv.setAttribute('class', 'subhead')
                            sub.appendChild(subInputDiv)

                            var nodeName = document.createElement('p');
                            subInputDiv.appendChild(nodeName)
                            nodeName.setAttribute('class', 'nodeName animate__animated animate__backInLeft')
                            nodeName.innerText = menupara.innerText;


                            let ipOuterdiv = document.createElement('div')
                            subInputDiv.appendChild(ipOuterdiv)
                            ipOuterdiv.setAttribute('class', 'ipoutdiv')


                            let subInput = document.createElement('input');
                            // ipOuterdiv.appendChild(subInput)
                            ipOuterdiv.appendChild(subInput)
                            subInput.setAttribute('id', 'subInput' + j);
                            subInput.setAttribute('class', 'subInput');

                            let subInputbtn = document.createElement('button')
                            // ipOuterdiv.appendChild(subInputbtn);
                            ipOuterdiv.appendChild(subInputbtn)
                            subInputbtn.innerText = 'AddChild'
                            subInputbtn.setAttribute('id', 'addsubip' + j)
                            subInputbtn.setAttribute('class', 'addsubip')


                            let a = document.createElement('div')
                            a.setAttribute('id', 'subInputBox')
                            a.setAttribute('class', 'tab-content')

                            sub.appendChild(a)
                            // console.log('innerHtml',a.innerHTML);
                            if (a.innerHTML == '') {
                                if (value == menupara.innerText) {


                                    for (s = 0; s < childlen; s++) {
                                        // let childValue = firstApiResponse.data[0].payLoad[x];
                                        let childValue = firstApiResponse.data[0].payLoad[x].menus[s].subMenu.subMenuName

                                        // let subInputValue = subInput.value;
                                        let b = document.createElement('div')
                                        b.setAttribute('class', 'subinputboxes tab-pane active')
                                        b.setAttribute('id', 'menu' + k)
                                        b.setAttribute('draggable', 'true')


                                        a.appendChild(b);

                                        let inputTextDiv = document.createElement('div');
                                        inputTextDiv.setAttribute('id', 'inputText' + k);
                                        inputTextDiv.setAttribute('class', 'inputText');
                                        // inputTextDiv.setAttribute('draggable', 'true')

                                        b.appendChild(inputTextDiv);

                                        let inputParaDiv = document.createElement('p');
                                        inputParaDiv.setAttribute('class', 'inputParaDiv animate__animated animate__backInDown')
                                        inputParaDiv.setAttribute('id', 'inputParaDiv' + k)
                                        inputTextDiv.appendChild(inputParaDiv);
                                        // inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + subInputValue;
                                        inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + childValue;

                                        // childValue

                                        let div3 = document.createElement('div')
                                        div3.setAttribute('class', 'childEditDel')

                                        let subInputdel = document.createElement('button')
                                        subInputdel.setAttribute('id', 'ipDelBtn' + k)
                                        subInputdel.setAttribute('class', 'ipDelBtn')

                                        let editbtnSub = document.createElement('button')
                                        editbtnSub.setAttribute('id', 'editsub' + k)
                                        editbtnSub.setAttribute('class', 'editsub')
                                        editbtnSub.innerHTML = "<i class='ri-pencil-fill'></i>";
                                        div3.appendChild(editbtnSub);

                                        div3.appendChild(subInputdel);
                                        inputTextDiv.appendChild(div3);
                                        subInputdel.innerHTML = "<i class='ri-close-circle-fill'></i>";

                                        // sub.appendChild(inputTextDiv);
                                        let removeSub = function () {
                                            // console.log('hi')
                                            this.parentNode.parentNode.parentNode.remove();
                                        };
                                        subInputdel.onclick = removeSub;



                                        k++

                                    }

                                }
                            }


                            function getSubIpValue() {


                                // let childValue = firstApiResponse.data[0].payLoad[x];
                                // console.log(childValue)




                                let subInputValue = subInput.value;
                                let b = document.createElement('div')
                                b.setAttribute('class', 'subinputboxes tab-pane active')
                                b.setAttribute('id', 'menu' + k)
                                b.setAttribute('draggable', 'true')

                                a.appendChild(b);

                                let inputTextDiv = document.createElement('div');
                                inputTextDiv.setAttribute('id', 'inputText' + k);
                                inputTextDiv.setAttribute('class', 'inputText');
                                b.appendChild(inputTextDiv);

                                let inputParaDiv = document.createElement('p');
                                inputParaDiv.setAttribute('class', 'inputParaDiv animate__animated animate__backInDown')
                                inputParaDiv.setAttribute('id', 'inputParaDiv' + k)
                                inputTextDiv.appendChild(inputParaDiv);
                                inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + subInputValue;




                                let div3 = document.createElement('div')

                                let subInputdel = document.createElement('button')
                                subInputdel.setAttribute('id', 'ipDelBtn' + k)
                                subInputdel.setAttribute('class', 'ipDelBtn')

                                let editbtnSub = document.createElement('button')
                                editbtnSub.setAttribute('id', 'editsub' + k)
                                editbtnSub.setAttribute('class', 'editsub')
                                editbtnSub.innerHTML = "<i class='ri-pencil-fill'></i>";
                                div3.appendChild(editbtnSub);

                                div3.appendChild(subInputdel);
                                inputTextDiv.appendChild(div3);
                                subInputdel.innerHTML = "<i class='ri-close-circle-fill'></i>";

                                // sub.appendChild(inputTextDiv);
                                let removeSub = function () {
                                    // console.log('hi')
                                    this.parentNode.parentNode.parentNode.remove();
                                };
                                subInputdel.onclick = removeSub;
                                k++

                                axios({
                                    method: 'post',
                                    url: 'http://10.1.6.87:8080/api/store/child',
                                    data: {

                                        "permissionName": "/coupon/special-coupon",
                                        "permissionDescription": subInputValue,
                                        "permissionGroup": nodeName.innerText,
                                        "permissionControl": "MENU",
                                        "icon": "sub-icon",
                                        "permissionLevel": "Special Coupon",
                                        // "rankData": "64"
                                    }
                                });
                            }
                            subInputbtn.onclick = getSubIpValue;

                            /* draggable element */

                            const itemm = document.querySelector('.inputText');

                            itemm.addEventListener('dragstart', dragStart);
                            console.log(itemm)

                            function dragStart(e) {
                                e.dataTransfer.setData('text/plain', e.target.id);
                                // let parentOfDraggableElement=e.target.parentNode;
                                // console.log(parentOfDraggableElement);
                                setTimeout(() => {
                                    e.target.classList.add('hide');
                                }, 0);
                            }


                            /* drop targets */

                            const boxes = document.querySelectorAll('.subinputboxes');

                            boxes.forEach(box => {
                                box.addEventListener('dragenter', dragEnter)
                                box.addEventListener('dragover', dragOver);
                                box.addEventListener('dragleave', dragLeave);
                                box.addEventListener('drop', drop);
                            });


                            function dragEnter(e) {
                                e.preventDefault();
                                e.target.classList.add('drag-over');
                                let parentDivOfDropELement = e.target.parentNode;
                                // console.log(showdiv);

                            }

                            function dragOver(e) {
                                e.preventDefault();
                                e.target.classList.add('drag-over');
                            }

                            function dragLeave(e) {
                                e.target.classList.remove('drag-over');
                            }

                            function drop(e) {
                                e.target.classList.remove('drag-over');
                                // let innerhtmlvalue=e.target
                                // console.log(innerhtmlvalue);

                                // get the draggable element

                                const id = e.dataTransfer.getData('text/plain');
                                // console.log(id)
                                const draggable = document.getElementById(id);
                                // console.log(draggable)

                                // add it to the drop target
                                e.target.appendChild(draggable);

                                // display the draggable element
                                draggable.classList.remove('hide');
                            }
                        }
                        else {
                            let sub1 = document.createElement('div');
                            sub1.setAttribute('id', 'subdiv');
                            sub1.setAttribute('class', 'subchildstyle  tab-pane active');
                            // z.replaceChild(sub,sub1);
                            // z.appendChild(sub1);

                            let subInputDiv = document.createElement('div');
                            subInputDiv.setAttribute('id', 'subhead' + j);
                            subInputDiv.setAttribute('class', 'subhead')
                            sub1.appendChild(subInputDiv)

                            let nodeName = document.createElement('p');
                            subInputDiv.appendChild(nodeName)
                            nodeName.setAttribute('class', 'nodeName animate__animated animate__backInLeft')
                            nodeName.innerText = menupara.innerText;


                            let ipOuterdiv = document.createElement('div')
                            subInputDiv.appendChild(ipOuterdiv)
                            ipOuterdiv.setAttribute('class', 'ipoutdiv')


                            let subInput = document.createElement('input');
                            // ipOuterdiv.appendChild(subInput)
                            ipOuterdiv.appendChild(subInput)
                            subInput.setAttribute('id', 'subInput' + j);
                            subInput.setAttribute('class', 'subInput');


                            let subInputbtn = document.createElement('button')
                            // ipOuterdiv.appendChild(subInputbtn);
                            ipOuterdiv.appendChild(subInputbtn)
                            subInputbtn.innerText = 'AddChild'
                            subInputbtn.setAttribute('id', 'addsubip' + j)
                            subInputbtn.setAttribute('class', 'addsubip')


                            let a = document.createElement('div')
                            a.setAttribute('id', 'subInputBox')
                            a.setAttribute('class', 'tab-content')

                            sub1.appendChild(a)
                            var sp2 = document.getElementById("subdiv");
                            z.replaceChild(sub1, sp2);
                            if (a.innerHTML == '') {
                                if (value == menupara.innerText) {

                                    for (s = 0; s < childlen; s++) {
                                        // let childValue = firstApiResponse.data[0].payLoad[x];
                                        let childValue = firstApiResponse.data[0].payLoad[x].menus[s].subMenu.subMenuName

                                        // console.log(childValue)

                                        // let subInputValue = subInput.value;
                                        let b = document.createElement('div')
                                        b.setAttribute('class', 'subinputboxes tab-pane active')
                                        b.setAttribute('id', 'menu' + k)
                                        b.setAttribute('draggable', 'true')

                                        a.appendChild(b);

                                        let inputTextDiv = document.createElement('div');
                                        inputTextDiv.setAttribute('id', 'inputText' + k);
                                        inputTextDiv.setAttribute('class', 'inputText');
                                        b.appendChild(inputTextDiv);

                                        let inputParaDiv = document.createElement('p');
                                        inputParaDiv.setAttribute('class', 'inputParaDiv animate__animated animate__backInDown')
                                        inputParaDiv.setAttribute('id', 'inputParaDiv' + k)
                                        inputTextDiv.appendChild(inputParaDiv);
                                        inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + childValue;


                                        let div3 = document.createElement('div')

                                        let subInputdel = document.createElement('button')
                                        subInputdel.setAttribute('id', 'ipDelBtn' + k)
                                        subInputdel.setAttribute('class', 'ipDelBtn')

                                        let editbtnSub = document.createElement('button')
                                        editbtnSub.setAttribute('id', 'editsub' + k)
                                        editbtnSub.setAttribute('class', 'editsub')
                                        editbtnSub.innerHTML = "<i class='ri-pencil-fill'></i>";
                                        div3.appendChild(editbtnSub);

                                        div3.appendChild(subInputdel);
                                        inputTextDiv.appendChild(div3);
                                        subInputdel.innerHTML = "<i class='ri-close-circle-fill'></i>";

                                        let removeSub = function () {
                                            this.parentNode.parentNode.parentNode.remove();
                                        };
                                        subInputdel.onclick = removeSub;



                                        k++

                                    }
                                }
                            }

                            function getSubIpValue() {

                                let subInputValue = subInput.value;
                                let b = document.createElement('div')
                                b.setAttribute('class', 'subinputboxes tab-pane active')
                                b.setAttribute('id', 'menu' + k)
                                b.setAttribute('draggable', 'true')

                                a.appendChild(b);

                                let inputTextDiv = document.createElement('div');
                                inputTextDiv.setAttribute('id', 'inputText' + k);
                                inputTextDiv.setAttribute('class', 'inputText');
                                b.appendChild(inputTextDiv);

                                let inputParaDiv = document.createElement('p');
                                inputParaDiv.setAttribute('class', 'inputParaDiv animate__animated animate__backInDown')
                                inputParaDiv.setAttribute('id', 'inputParaDiv' + k)

                                inputTextDiv.appendChild(inputParaDiv);
                                inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + subInputValue;

                                let div3 = document.createElement('div')

                                let subInputdel = document.createElement('button')
                                subInputdel.setAttribute('id', 'ipDelBtn' + k)
                                subInputdel.setAttribute('class', 'ipDelBtn')


                                let editbtnSub = document.createElement('button')
                                editbtnSub.setAttribute('id', 'editsub' + k)
                                editbtnSub.setAttribute('class', 'editsub')
                                editbtnSub.innerHTML = "<i class='ri-pencil-fill'></i>";
                                div3.appendChild(editbtnSub);

                                div3.appendChild(subInputdel);
                                inputTextDiv.appendChild(div3);
                                subInputdel.innerHTML = "<i class='ri-close-circle-fill'></i>";


                                let removeSub = function () {

                                    this.parentNode.parentNode.parentNode.remove();
                                };
                                subInputdel.onclick = removeSub;


                                k++

                                axios({
                                    method: 'post',
                                    url: 'http://10.1.6.87:8080/api/store',
                                    data: {

                                        "permissionName": "/coupon/special-coupon",
                                        "permissionDescription": subInputValue,
                                        "permissionGroup": nodeName.innerText,
                                        "permissionControl": "MENU",
                                        "icon": "sub-icon",
                                        "permissionLevel": "Special Coupon",
                                        // "rankData": "64"
                                    }
                                });
                            }

                            subInputbtn.onclick = getSubIpValue;

                            /* draggable element */

                            const itemm = document.querySelector('.inputText');


                            itemm.addEventListener('dragstart', dragStart);
                            console.log(itemm);

                            function dragStart(e) {
                                e.dataTransfer.setData('text/plain', e.target.id);
                                setTimeout(() => {
                                    e.target.classList.add('hide');
                                }, 0);

                            }


                            /* drop targets */

                            const boxes = document.querySelectorAll('.subinputboxes');
                            console.log(boxes);

                            boxes.forEach(box => {
                                box.addEventListener('dragenter', dragEnter)
                                box.addEventListener('dragover', dragOver);
                                box.addEventListener('dragleave', dragLeave);
                                box.addEventListener('drop', drop);
                            });


                            function dragEnter(e) {
                                e.preventDefault();
                                e.target.classList.add('drag-over');
                            }

                            function dragOver(e) {
                                e.preventDefault();
                                e.target.classList.add('drag-over');
                            }

                            function dragLeave(e) {
                                e.target.classList.remove('drag-over');
                            }

                            function drop(e) {
                                e.target.classList.remove('drag-over');

                                // get the draggable element

                                const id = e.dataTransfer.getData('text/plain');
                                console.log(id)
                                const draggable = document.getElementById(id);
                                console.log(draggable)

                                // add it to the drop target
                                e.target.appendChild(draggable);

                                // display the draggable element
                                draggable.classList.remove('hide');
                            }
                        }
                        // btn1.disabled = true;

                        j++;
                    }

                    function updatedValue() {

                        editbtn.disabled = true;

                        paragraph.contentEditable = true;
                        paragraph.style.backgroundColor = "#ebebeb";
                        paragraph.style.color = "black";
                        paragraph.style.outline = "none";
                        paragraph.style.borderRadius = "10px";
                        paragraph.style.padding = "1px 10px";


                        // nodeName.innerText = menupara.innerText;

                        // <button type="submit" id="end-editing">Done</button>

                        let editDoneBtn = document.createElement('button')
                        div1.appendChild(editDoneBtn);
                        editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                        editDoneBtn.setAttribute('type', 'submit');
                        editDoneBtn.setAttribute('id', 'end-editing')

                        editDoneBtn.addEventListener("click", function () {
                            paragraph.contentEditable = false;
                            paragraph.style.backgroundColor = "#b6ff46";
                            setTimeout(function () { paragraph.style.backgroundColor = "white"; }, 3000);

                            paragraph.style.borderRadius = "20px";
                            paragraph.style.padding = "0px";

                            editDoneBtn.style.display = 'none';
                            editbtn.disabled = false;



                        })

                    }

                    document.getElementById('edit' + i).onclick = updatedValue;

                    document.getElementById('add' + i).onclick = subMainDiv;
                    btn2.onclick = remove;
                    i++;
                }
            }

        }

    } catch (err) {
        // Handle Error Here

        console.error(err);
    }


}
async function addNode() {


    let item = document.getElementById('usr');
    let itemValue = item.value;
    listArray.push(itemValue);
    // console.log(listArray);
    let additem = document.getElementById('list')
    let li = document.createElement('li');
    li.setAttribute('class', 'addeditmes animate__animated animate__backInDown nav-item');
    li.setAttribute('id', 'list' + i);
    additem.appendChild(li);

    let anchor = document.createElement('a');
    anchor.setAttribute('class', 'anchorstyle nav-link active')
    anchor.setAttribute('data-toggle', 'tab')
    anchor.setAttribute('href', '#subdiv');
    li.appendChild(anchor);


    let div1 = document.createElement('div');
    div1.setAttribute('class', 'textcolor animate__animated animate__fadeInDown');

    let editbtn = document.createElement('button')
    div1.appendChild(editbtn);
    editbtn.setAttribute('id', 'edit' + i)
    editbtn.innerHTML = "<i class='ri-pencil-fill'></i>";
    let menupara = document.createElement('p')
    menupara.setAttribute('id', 'menuName' + i)
    div1.appendChild(menupara);
    menupara.innerText = itemValue;
    // menupara.innerText = value;



    let div2 = document.createElement('div');
    div2.setAttribute('class', 'addminus')


    let btn1 = document.createElement('button');
    btn1.setAttribute('class', 'btn ')
    btn1.setAttribute('id', 'add' + i);
    btn1.innerHTML = "<i class='ri-add-circle-fill'></i>"

    let btn2 = document.createElement('button');
    btn2.setAttribute('class', 'btn');
    btn2.setAttribute('id', 'delete' + i);
    btn2.innerHTML = "<i class='ri-close-circle-fill'></i>"

    div2.appendChild(btn1)
    div2.appendChild(btn2)


    anchor.appendChild(div1)
    anchor.appendChild(div2)

    let remove = function () {
        this.parentNode.parentNode.parentNode.remove();
    };

    const paragraph = document.getElementById('menuName' + i);
    // const edit_button = document.getElementById("edit-button");
    // const end_button = document.getElementById("end-editing");

    // edit_button.addEventListener("click", function () {
    //     paragraph.contentEditable = true;
    //     paragraph.style.backgroundColor = "#dddbdb";
    // });

    // end_button.addEventListener("click", function () {
    //     paragraph.contentEditable = false;
    //     paragraph.style.backgroundColor = "#ffe44d";
    // })





    let test = axios({
        method: 'post',
        url: 'http://10.1.6.87:8080/api/store/parent',
        data: {
            "permissionName": "Link",
            "permissionDescription": itemValue,
            "permissionGroup": "Root",
            "permissionControl": "Group",
            "icon": "store-front",
            "permissionLevel": " Merchants",
            // "rankData": "64"
        }
    });
    console.log(test);

    // payloadReal['permissionDescription'] = itemValue;


    //   let test = await axios.post(`http://10.1.6.87:8080/api/store`, payloadReal, config);

    //   console.log(data);


    // axios.post( 'http://10.1.6.87:8080/api/store', payload2, config).then((res) => {
    //         console.log(res);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    let subMainDiv = function () {

        let z = document.getElementById('childs')
        if (z.innerHTML === '') {
            let sub = document.createElement('div');
            sub.setAttribute('id', 'subdiv');
            sub.setAttribute('class', 'subchildstyle  tab-pane active');
            z.appendChild(sub);


            let subInputDiv = document.createElement('div');
            subInputDiv.setAttribute('id', 'subhead' + j);
            subInputDiv.setAttribute('class', 'subhead')
            sub.appendChild(subInputDiv)

            var nodeName = document.createElement('p');
            subInputDiv.appendChild(nodeName)
            nodeName.setAttribute('class', 'nodeName animate__animated animate__backInLeft')
            nodeName.innerText = menupara.innerText;


            let ipOuterdiv = document.createElement('div')
            subInputDiv.appendChild(ipOuterdiv)
            ipOuterdiv.setAttribute('class', 'ipoutdiv')


            let subInput = document.createElement('input');
            ipOuterdiv.appendChild(subInput)
            subInput.setAttribute('id', 'subInput' + j);
            subInput.setAttribute('class', 'subInput');

            let subInputbtn = document.createElement('button')
            ipOuterdiv.appendChild(subInputbtn)
            subInputbtn.innerText = 'AddChild'
            subInputbtn.setAttribute('id', 'addsubip' + j)
            subInputbtn.setAttribute('class', 'addsubip')


            let a = document.createElement('div')
            a.setAttribute('id', 'subInputBox')
            a.setAttribute('class', 'tab-content')

            sub.appendChild(a)
            function getSubIpValue() {



                let subInputValue = subInput.value;
                let b = document.createElement('div')
                b.setAttribute('class', 'subinputboxes tab-pane active')
                b.setAttribute('id', 'menu' + k)
                b.setAttribute('draggable', 'true')

                a.appendChild(b);

                let inputTextDiv = document.createElement('div');
                inputTextDiv.setAttribute('id', 'inputText' + k);
                inputTextDiv.setAttribute('class', 'inputText');
                b.appendChild(inputTextDiv);

                let inputParaDiv = document.createElement('p');
                inputParaDiv.setAttribute('class', 'inputParaDiv animate__animated animate__backInDown')
                inputParaDiv.setAttribute('id', 'inputParaDiv' + k)

                inputTextDiv.appendChild(inputParaDiv);
                inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + subInputValue;

                let div3 = document.createElement('div')

                let subInputdel = document.createElement('button')
                subInputdel.setAttribute('id', 'ipDelBtn' + k)
                subInputdel.setAttribute('class', 'ipDelBtn')

                let editbtnSub = document.createElement('button')
                editbtnSub.setAttribute('id', 'editsub' + k)
                editbtnSub.setAttribute('class', 'editsub')
                editbtnSub.innerHTML = "<i class='ri-pencil-fill'></i>";
                div3.appendChild(editbtnSub);

                div3.appendChild(subInputdel);
                inputTextDiv.appendChild(div3);
                subInputdel.innerHTML = "<i class='ri-close-circle-fill'></i>";

                let removeSub = function () {
                    this.parentNode.parentNode.parentNode.remove();
                };
                subInputdel.onclick = removeSub;

                /* draggable element */

                const itemm = document.querySelector('.inputText');
                console.log(itemm);

                itemm.addEventListener('dragstart', dragStart);

                function dragStart(e) {
                    e.dataTransfer.setData('innerHTML', e.target.id);
                    setTimeout(() => {
                        e.target.classList.add('hide');
                    }, 0);
                }


                /* drop targets */

                const boxes = document.querySelectorAll('.subinputboxes');
                console.log(boxes);

                boxes.forEach(box => {
                    box.addEventListener('dragenter', dragEnter)
                    box.addEventListener('dragover', dragOver);
                    box.addEventListener('dragleave', dragLeave);
                    box.addEventListener('drop', drop);
                });


                function dragEnter(e) {
                    e.preventDefault();
                    e.target.classList.add('drag-over');
                }

                function dragOver(e) {
                    e.preventDefault();
                    e.target.classList.add('drag-over');
                }

                function dragLeave(e) {
                    e.target.classList.remove('drag-over');
                }

                function drop(e) {
                    e.target.classList.remove('drag-over');

                    // get the draggable element

                    const id = e.dataTransfer.getData('innerHTML');
                    console.log(id)
                    const draggable = document.getElementById(id);
                    console.log(draggable)

                    // add it to the drop target
                    e.target.appendChild(draggable);

                    // display the draggable element
                    draggable.classList.remove('hide');
                }
                k++

                axios({
                    method: 'post',
                    url: 'http://10.1.6.87:8080/api/store',
                    data: {

                        "permissionName": "/coupon/special-coupon",
                        "permissionDescription": subInputValue,
                        "permissionGroup": nodeName.innerText,
                        "permissionControl": "MENU",
                        "icon": "sub-icon",
                        "permissionLevel": "Special Coupon",
                        // "rankData": "64"
                    }
                });
            }
            subInputbtn.onclick = getSubIpValue;
        }
        else {
            let sub1 = document.createElement('div');
            sub1.setAttribute('id', 'subdiv');
            sub1.setAttribute('class', 'subchildstyle  tab-pane active');


            let subInputDiv = document.createElement('div');
            subInputDiv.setAttribute('id', 'subhead' + j);
            subInputDiv.setAttribute('class', 'subhead')
            sub1.appendChild(subInputDiv)

            let nodeName = document.createElement('p');
            subInputDiv.appendChild(nodeName)
            nodeName.setAttribute('class', 'nodeName animate__animated animate__backInLeft')
            nodeName.innerText = menupara.innerText;


            let ipOuterdiv = document.createElement('div')
            subInputDiv.appendChild(ipOuterdiv)
            ipOuterdiv.setAttribute('class', 'ipoutdiv')


            let subInput = document.createElement('input');
            ipOuterdiv.appendChild(subInput)
            subInput.setAttribute('id', 'subInput' + j);
            subInput.setAttribute('class', 'subInput');


            let subInputbtn = document.createElement('button')
            ipOuterdiv.appendChild(subInputbtn)
            subInputbtn.innerText = 'AddChild'
            subInputbtn.setAttribute('id', 'addsubip' + j)
            subInputbtn.setAttribute('class', 'addsubip')


            let a = document.createElement('div')
            a.setAttribute('id', 'subInputBox')
            a.setAttribute('class', 'tab-content')

            sub1.appendChild(a)
            var sp2 = document.getElementById("subdiv");
            z.replaceChild(sub1, sp2);

            function getSubIpValue() {

                let subInputValue = subInput.value;
                let b = document.createElement('div')
                b.setAttribute('class', 'subinputboxes tab-pane active')
                b.setAttribute('id', 'menu' + k)
                b.setAttribute('draggable', 'true')

                a.appendChild(b);

                let inputTextDiv = document.createElement('div');
                inputTextDiv.setAttribute('id', 'inputText' + k);
                inputTextDiv.setAttribute('class', 'inputText');
                b.appendChild(inputTextDiv);

                let inputParaDiv = document.createElement('p');
                inputParaDiv.setAttribute('class', 'inputParaDiv animate__animated animate__backInDown')
                inputParaDiv.setAttribute('id', 'inputParaDiv' + k)

                inputTextDiv.appendChild(inputParaDiv);
                inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + subInputValue;

                let div3 = document.createElement('div')

                let subInputdel = document.createElement('button')
                subInputdel.setAttribute('id', 'ipDelBtn' + k)
                subInputdel.setAttribute('class', 'ipDelBtn')

                let editbtnSub = document.createElement('button')
                editbtnSub.setAttribute('id', 'editsub' + k)
                editbtnSub.setAttribute('class', 'editsub')
                editbtnSub.innerHTML = "<i class='ri-pencil-fill'></i>";
                div3.appendChild(editbtnSub);

                div3.appendChild(subInputdel);
                inputTextDiv.appendChild(div3);
                subInputdel.innerHTML = "<i class='ri-close-circle-fill'></i>";

                let removeSub = function () {
                    this.parentNode.parentNode.parentNode.remove();
                };
                subInputdel.onclick = removeSub;


                /* draggable element */

                const itemm = document.querySelector('.inputText');
                console.log(itemm);

                itemm.addEventListener('dragstart', dragStart);

                function dragStart(e) {
                    e.dataTransfer.setData('innerHTML', e.target.id);
                    setTimeout(() => {
                        e.target.classList.add('hide');
                    }, 0);
                }


                /* drop targets */

                const boxes = document.querySelectorAll('.subinputboxes');
                console.log(boxes);

                boxes.forEach(box => {
                    box.addEventListener('dragenter', dragEnter)
                    box.addEventListener('dragover', dragOver);
                    box.addEventListener('dragleave', dragLeave);
                    box.addEventListener('drop', drop);
                });


                function dragEnter(e) {
                    e.preventDefault();
                    e.target.classList.add('drag-over');
                }

                function dragOver(e) {
                    e.preventDefault();
                    e.target.classList.add('drag-over');
                }

                function dragLeave(e) {
                    e.target.classList.remove('drag-over');
                }

                function drop(e) {
                    e.target.classList.remove('drag-over');

                    // get the draggable element

                    const id = e.dataTransfer.getData('innerHTML');
                    console.log(id)
                    const draggable = document.getElementById(id);
                    console.log(draggable)

                    // add it to the drop target
                    e.target.appendChild(draggable);

                    // display the draggable element
                    draggable.classList.remove('hide');
                }
                k++

                axios({
                    method: 'post',
                    url: 'http://10.1.6.87:8080/api/store',
                    data: {

                        "permissionName": "/coupon/special-coupon",
                        "permissionDescription": subInputValue,
                        "permissionGroup": nodeName.innerText,
                        "permissionControl": "MENU",
                        "icon": "sub-icon",
                        "permissionLevel": "Special Coupon",
                        // "rankData": "64"
                    }
                });
            }

            subInputbtn.onclick = getSubIpValue;
            // console.log(subInputbtn);
        }
        btn1.disabled = true;
        j++;
    }
    function updatedValue() {

        if (editbtn.clicked == true) {

            paragraph.contentEditable = false;

            paragraph.style.backgroundColor = "#3830db";
            paragraph.style.color = "white";
            paragraph.style.outline = "none";

            console.log('hi')
        }
        else {
            paragraph.contentEditable = true;
            paragraph.style.backgroundColor = "#ebebeb";
            paragraph.style.color = "black";
            paragraph.style.outline = "none";
            // nodeName.innerText = menupara.innerText;

        }

    }

    document.getElementById('edit' + i).onclick = updatedValue;

    document.getElementById('add' + i).onclick = subMainDiv;
    btn2.onclick = remove;
    i++;


}


