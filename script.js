const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('.tab-content')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(content => {
            content.classList.remove('active')
        })
        tabs.forEach(tab2 => {
            tab2.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

const copyables = document.querySelectorAll('.copyable')
copyables.forEach(copyable => {
    copyable.addEventListener('click', () => {
        navigator.clipboard.writeText(copyable.innerText)
        alert("Copied to the clipboard!")
    })
})

const projectSummaryItems = document.querySelectorAll('.project-summary-item')
projectSummaryItems.forEach(item => {
    item.addEventListener('click', () => {
        tabContents.forEach(content => {
            content.classList.remove('active')
        })
        tabs.forEach(tab2 => {
            tab2.classList.remove('active')
        })
        document.querySelector('#projects-tab').classList.add('active')
        document.querySelector('#projects').classList.add('active')
    })
})