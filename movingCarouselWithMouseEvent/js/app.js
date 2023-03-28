let checkObjectLeftInterval = setInterval(checkObjectLeft, 10);
let movingObjectsInterval =  setInterval(movingObjects, 10);

let objectsContainer = document.getElementById('container');

window.onload = () => {
    addNewObject();
}

function addNewObject()
{
    let div = document.createElement('div');
    div.className = 'object';
    if (objectsContainer.children.length > 0)
    {
        div.style.left = (objectsContainer.children[objectsContainer.children.length - 1].offsetLeft + 350) + 'px';
    }
    else
    {
        div.style.left = (window.innerWidth + 350) + 'px';
    }
    objectsContainer.appendChild(div);
    setMouseEvents();
}

function setMouseEvents()
{
    for (const child of objectsContainer.children) {
        child.onmouseenter = () => {
            clearInterval(movingObjectsInterval);
        }
        child.onmouseleave = () => {
            movingObjectsInterval =  setInterval(movingObjects, 10);
        }
    }
}

function movingObjects()
{
    if (objectsContainer.children.length > 0)
    {
        for (const child of objectsContainer.children) {
            child.style.left = (child.offsetLeft - 1) + 'px';
        }
    }
}
    

function checkObjectLeft()
{
    if (objectsContainer.children.length > 0)
    {
        if (objectsContainer.children[objectsContainer.children.length - 1].getBoundingClientRect().left < (window.innerWidth + 220))
        {
            addNewObject();
        }
        for (let i = 0; i < objectsContainer.children.length; i++)
        {
            if (objectsContainer.children[i].getBoundingClientRect().left < -200)
            {
                objectsContainer.children[i].remove();
            }
        }
    }
}

