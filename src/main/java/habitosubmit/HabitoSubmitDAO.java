package habitosubmit;
import com.siertech.stapi.model.GenericDAO;
import com.siertech.stapi.util.DataUtil;

import java.util.Date;
import java.util.List;

import org.hibernate.Query;
import org.springframework.stereotype.Repository;

@Repository
public class HabitoSubmitDAO  extends GenericDAO<HabitoSubmit> {
	
	

	public HabitoSubmitDAO() {
		
		super(HabitoSubmit.class);
		
	}
	
	@Override
	public HabitoSubmit addOrUpdate(HabitoSubmit submit) {
		
		String submitedDate = submit.getSubmitedDate();
		
		if(submitedDate==null)
			submitedDate = DataUtil.getFormated(new Date());
		
		String queryHabitoAtDay = "select id from HabitoSubmit where habito.id = "+submit.getHabito().getId()+" and submitedDate ='"+submitedDate+"'";
		@SuppressWarnings("unchecked")
		List<HabitoSubmit> result = getSessionFactory().getCurrentSession().createQuery(queryHabitoAtDay).list();
		
		System.out.println("Resultado do result: ");
		System.out.println(result);
		
		if(result.size()==0)
		   return super.addOrUpdate(submit);
		else 
			return null;
	}
	
	
	@Override
	public void deleteByIds(long[] ids) {
		String query ="";
		query="delete from HabitoSubmit  where id=:id";
		
		Query q = getSessionFactory().getCurrentSession().createQuery(query);
		System.out.println("Query executada: "+q.getQueryString());
		for(int i=0;i<ids.length;i++){
			q.setLong("id",ids[i]);
			q.executeUpdate();
		}
	}
}
