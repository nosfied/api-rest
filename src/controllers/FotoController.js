// eslint-disable-next-line import/no-extraneous-dependencies
import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
  async store(req, res) {
    // eslint-disable-next-line consistent-return
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (error) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new FotoController();
