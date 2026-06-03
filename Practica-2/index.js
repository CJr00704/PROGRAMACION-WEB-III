import express from 'express'
import mysql2 from 'mysql2/promise'

const app=express()
app.use(express.json())

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practica2'
});

//EJERCICIO 1
app.post('/categorias', async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const [resultado]=
        await pool.query('INSERT INTO categorias(nombre, descripcion) VALUES (?, ?)',[nombre, descripcion]);
        res.status(201).json({mensaje: 'Categoría registrada correctamente',id: resultado.insertId});
    }catch (error){
        res.status(500).json({mensaje: 'Error al registrar categoría'});
    }
});

//EJERCICIO 2
app.get('/categorias', async (req, res) => {
    try {
        const [categorias] = await pool.query('SELECT * FROM categorias');
        res.json(categorias);
    }catch (error){
        res.status(500).json({mensaje: 'Error al obtener las categorías'});
    }
});

//EJERCICIO 3
app.get('/categorias/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [categorias]=
        await pool.query('SELECT * FROM categorias WHERE id = ?',[id]);
        res.json(categorias[0]);
    }catch(error){
        res.status(500).json({mensaje: 'Error al obtener la categoría'});
    }
});

//EJERCICIO 4
app.patch('/categorias/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        const [resultado]=
        await pool.query('UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?',[nombre, descripcion, id]);
        res.json({mensaje: 'Categoría actualizada correctamente'});
    }catch (error){
        res.status(500).json({mensaje: 'Error al actualizar categoría'});
    }
});

//EJERCICIO 5
app.delete('/categorias/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [resultado]=
        await pool.query('DELETE FROM categorias WHERE id = ?',[id]);
        res.json({mensaje: 'Categoría eliminada correctamente'});
    }catch (error){
        res.status(500).json({mensaje: 'Error al eliminar categoría'});
    }
});

const puerto=3001
app.listen(puerto, ()=>{
    console.log(`Servidor en http://localhost:${puerto}`)
})