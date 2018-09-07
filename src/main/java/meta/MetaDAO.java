package meta;
import java.util.ArrayList;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import com.siertech.stapi.model.GenericDAO;

import papel.PapelService;
import trilha.Trilha;
import evidencia.Evidencia;
import habito.Habito;

import org.springframework.stereotype.Repository;

@Repository
public class MetaDAO  extends GenericDAO<Meta> {


	@Override
	public Meta getById(long id) {

		Meta m = super.getById(id);
		//Hibernate.initialize(m.getEvidencias());
		//Hibernate.initialize(m.getTrilhas());
		//Hibernate.initialize(m.getHabitos());
		return super.getById(id);
	}


	public MetaDAO() {

		super(Meta.class);

	}


	@Override
	public ArrayList<Meta> getLikeMap(String[] qs, int pagina, int max, String extra) {
		// TODO Auto-generated method stub
		ArrayList<Meta> metas =  super.getLikeMap(qs, pagina, max, extra);

		for(Meta m: metas) {
			
			/*
			m.setEvidencias(new ArrayList<Evidencia>());
			m.setTrilhas(new ArrayList<Trilha>());
			m.setHabitos(new ArrayList<Habito>());
			*/
		}

		return metas;
	}

	@Override
	public Meta addOrUpdate(Meta item) {


		
		/*

		for(Evidencia e : item.getEvidencias()) {

			e.setMeta(item);

		}

		for(Habito h : item.getHabitos()) {

			h.setMeta(item);

		}


		for(Trilha  t : item.getTrilhas()) {

			t.setMeta(item);

		}
		*/

		return super.addOrUpdate(item);
	}


}
