import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../myapp/Typescript/Productos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlAPI = 'https://tu-api.com/productos';

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.urlAPI);
  }

  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.urlAPI, producto);
  }

  actualizarProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(this.urlAPI + '/' + producto.id, producto);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete<any>(this.urlAPI + '/' + id);
  }
}
