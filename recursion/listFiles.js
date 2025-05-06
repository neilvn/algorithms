// List all files in a directory

function listFiles(root) {
  if ('files' in root) {
    for (const file of root.files) {
      listFiles(file)
    }
  } else {
    console.log(root.name)
  }
}


const INPUT = {
  name: 'root',
  files: [
    {
      name: 'pics',
      files: [
        {
          name: 'cat.jpeg'
        },
        {
          name: 'portrait.jpeg'
        }
      ]
    },
    {
      name: 'taxes.pdf'
    },
    {
      name: 'misc',
      files: [
        {
          name: 'story.txt'
        }
      ]
    }
  ]
}

listFiles(INPUT)
