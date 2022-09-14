import { Route, Routes } from "react-router-dom";
import FormBolsaView from "./view/Bolsa/FormBolsa.view";
import ListBolsaView from "./view/Bolsa/ListBolsa.view";
import FormCorretora from "./view/Corretoras/FormCorretora.view";
import ListCorretorasView from "./view/Corretoras/ListCorretoras.view";
import FormEmpresaView from "./view/Empresas/FormEmpresa.view";
import ListEmpresasView from "./view/Empresas/ListEmpresas.view";
import HomeView from "./view/Home.view";
import FormNotaView from "./view/Notas/FormNota.view";
import ListNotasView from "./view/Notas/ListNotas.view";
import FormTituloView from "./view/Titulos/FormTitulo.view";
import ListTituloView from "./view/Titulos/ListTitulo.view";

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/corretoras" element={<ListCorretorasView />} />
            <Route path="/corretoras/formCorretora" element={<FormCorretora />} />
            <Route path="/notas" element={<ListNotasView />} />
            <Route path="/notas/formNota" element={<FormNotaView />} />
            <Route path="/bolsas" element={<ListBolsaView />} />
            <Route path="/bolsas/formBolsa" element={<FormBolsaView />} />
            <Route path="/empresas" element={<ListEmpresasView />} />
            <Route path="/empresas/formEmpresa" element={<FormEmpresaView />} />
            <Route path="/titulos" element={<ListTituloView />} />
            <Route path="/titulos/formTitulo" element={<FormTituloView />} />
        </Routes>
    );
}