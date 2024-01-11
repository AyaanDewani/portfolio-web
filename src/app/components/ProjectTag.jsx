import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected
    ? "text-white border-red-500"
    :"text-[#ADB7BE] border-orange-500 hover:border-red-500"
  return (
    <button className={`${buttonStyles} rounded-full border-2 py-3 px-6 text-xl cursor-pointer`}
    onClick={() => onClick(name)}>
        {name}

    </button>

  )
}

export default ProjectTag