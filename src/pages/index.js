import React from "react"

import Header from "../components/header"
import MainList from "../components/main-list"

import "../styles/index.scss"

const menuItems = [
  {
    name: "Profile",
    icon:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgBlVE7TgNBDLU9jtgCRVMgEYH4dKyiSElJyRG4AwfgPBwjJTegoSRKGbopVygKyeKxmYnYVaIoKHmVP0/2ezbCBm77/V7nhx4N4dwMQ+zE8WwyCU3ftcTRyHMNTyn0OUeEUzIYdK8uP6oQlrlGDZnnWoJZsbkJDAuer8omJTgCLVnka5p2L7e6KRf5nm5pzsbYTgaC9Tsan2W9ZhoixTFDUXavL6qsG9fGFvL8Z6pSw08yN1Ote8hu2PgQ1hd2i/jQ+jHwCOYNZYiO1oVWwsrdU5p2B4eYI7uhnXPtQXqUp50L7IEaVCQaX3PwLzMNVNC3X5dHZDS6Z6brAAAAAElFTkSuQmCC",
    url: "/profile",
  },
  {
    name: "Settings",
    icon:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFISURBVHgBhVA9SwNBEJ39OD1IiFeILqiwRQLhGq+ztLBImTKlpb/JMmVKC0HLgIUWwtkERYS1ELQQrrlwbvbDuY0fIYJ5xe4ww3vz5hFYQrebSePMcV0b7U6Vmrwuzkn9yCxLWKkHxPs7gAiAul6YUhiDoZUnft822EjlecHrflTagSdUIF0AuF85B4dIDqpsOuvjN6R1fwb2BlbAhu1ITNNUoGabANmtG5643Opy6Ky+JZzH2BfBnXfPQmwZrg09IYtKH9OxUqrCspJSXvK1Zja/h/W0qc/6i+qnSpJ4echa25sPzrh3Smg7xMZ5c2Nv5y2JY2A+OsLtYh6AvzaRPw9uOp00w5T68A+Md2fqcZJ/W8pgBRiwg/mPaLUaitB1acFdUU9eMHj5pXrhvHtCG007K0dFUVRkWUlizByTCwRthkrdq8X5J52FgKPqIiWWAAAAAElFTkSuQmCC",
    url: "/settings",
  },
]

const IndexPage = () => {
  return (
    <div className="index-page">
      <div className="wrapper">
        <Header items={menuItems} />
      </div>
      <div className="wrapper">
        <MainList />
      </div>
    </div>
  )
}

export default IndexPage
