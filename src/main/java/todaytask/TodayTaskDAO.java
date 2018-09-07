package todaytask;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class TodayTaskDAO  extends GenericDAO<TodayTask> {
	
	

	public TodayTaskDAO() {
		
		super(TodayTask.class);
		
	}
	
	
	
	
}
