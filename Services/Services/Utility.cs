using Okra.UI;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;

namespace Fundrika_Services.Services
{
    public class Utility
    {
        public byte[] getThumbnail(byte[] Icon)
        {
            UI nui = new UI();
            byte[] btyebuffer = Icon;
            MemoryStream ms = new MemoryStream(btyebuffer);
            ms.Position = 0;
            Bitmap bm = new Bitmap(ms);
            bm.MakeTransparent();
            Bitmap nbm = nui.GetThumbnail(bm, 120);

            ms = new MemoryStream();
            nbm.Save(ms, System.Drawing.Imaging.ImageFormat.Png);
            btyebuffer = ms.ToArray();
            ms.Close();
            ms = null;
            return btyebuffer;
        }

    }
}