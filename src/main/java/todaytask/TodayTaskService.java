package todaytask;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class TodayTaskService extends GenericService<TodayTask>   {

    @Autowired
	private TodayTaskDAO todaytaskDAO;
	
	
}
