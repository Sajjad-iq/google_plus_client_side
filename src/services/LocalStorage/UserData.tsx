import React, { useEffect, useState } from 'react'

export const UserDef = {
  _id: "",
  UserName: "",
  FamilyName: "",
  ProfilePicture: "",
  CoverPicture: "",
  Description: "",
  Email: "",
  Password: "",
  Followers: [],
}

export const UserData = () => {
  let key = localStorage.getItem("User")
  let User = JSON.parse(key || JSON.stringify(UserDef))
  return User
}
