﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        [HttpGet]
        [Route("User")]
        public string Get()
        {
            return "user_1";
        }
    }
}
