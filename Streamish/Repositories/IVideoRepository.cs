﻿using Streamish.Models;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IVideoRepository
    {
        void Add(Video video);
        void Delete(int id);
        List<Video> GetAll();
        Video GetById(int id);
        List<Video> GetAllWithComments();
        Video GetVideoByIdWithComments(int id);
        void Update(Video video);
        List<Video> Search(string criterion, bool sortDescending);
    }
}