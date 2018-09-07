package todaytask;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;

@Entity
@Table(name = "todaytask")
@Getter @Setter
public  class TodayTask extends CrudClass {

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private int categoria;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String titulo;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String ok;

}
