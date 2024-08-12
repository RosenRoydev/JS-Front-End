window.addEventListener("load", solve);

function solve() {
    let typeOfAnimalEl = document.getElementById('type');
    let ageEl = document.getElementById('age');
    let genderEl = document.getElementById('gender')
    const adoptButtonEl = document.getElementById('adopt-btn')
    const adoptionInfoUl = document.getElementById('adoption-info');
    const adoptedUl = document.getElementById('adopted-list');
    
    adoptButtonEl.addEventListener('click', (e)=>{
      e.preventDefault();
      if(ageEl.value === '' || typeOfAnimalEl.value === '' || genderEl.value ===''){
        return
      }
      const petLi = document.createElement('li');
      const article = document.createElement('article');
      let PetP = document.createElement('p');
      const divEl = document.createElement('div');
      divEl.classList.add('buttons');
      const editBtn = document.createElement('button');
      editBtn.classList.add('edit-btn');
      editBtn.textContent = 'Edit';
      const doneBtn = document.createElement('button');
      doneBtn.classList.add('done-btn');
      doneBtn.textContent = 'Done';
      PetP.textContent = `Pet:${typeOfAnimalEl.value}`;
      let genderP = document.createElement('p');
      genderP.textContent = `Gender:${genderEl.value}`;
      let ageP = document.createElement('p');
      ageP.textContent = `Age:${ageEl.value}`;
      article.appendChild(PetP);
      article.appendChild(genderP);
      article.appendChild(ageP);
      petLi.appendChild(article);
      divEl.appendChild(editBtn);
      divEl.appendChild(doneBtn);
      petLi.appendChild(divEl);
      adoptionInfoUl.appendChild(petLi);

      ageEl.value = '';
      typeOfAnimalEl.value = '';
      genderEl.value = '';

      editBtn.addEventListener('click', () =>{
        ageP.textContent = ageP.textContent.replace('Age:','');
        ageEl.value = Number(ageP.textContent)
        genderP.textContent = genderP.textContent.replace('Gender:','');
        genderEl.value = genderP.textContent
        typeOfAnimalEl.value = PetP.textContent.replace('Pet:','');
       petLi.remove();
      })
      doneBtn.addEventListener('click',(e)=>{
        
        const clearBtn = document.createElement('button')
        clearBtn.classList.add('clear-btn');
        clearBtn.textContent = 'Clear';
        divEl.appendChild(clearBtn);
        adoptionInfoUl.removeChild(petLi);
        adoptedUl.appendChild(petLi)

        clearBtn.addEventListener('click',()=>{
          petLi.remove();
        })
      })
    })
   
  }
  